use erichdongubler clipboard clip
use std [log, pwd]

def pause_for_confirmation [$prompt: string = "Press any key to continue…"] {
    input --suppress-output -n 1 $prompt | null
    print "\n"
}

def main [] {
  if (which "jj" | is-empty) {
    print --stderr ([
      $"(ansi red)This tool requires(ansi yellow) `jj`(ansi red), "
      "which it appears you do not have in `PATH`. Please fix this, "
      "and try again."
    ] | str join)
    return
  }

  # `glob` below canonicalizes paths, so we need this in case we're there's a symlink-influenced
  # part of the CWD.
  let canonicalized_pwd = pwd | path expand
  let assets_dir = [src assets ""] | path join

  let assets = glob "src/assets/*.svg" --no-dir
    | each {|asset_path|
      let asset_path_relative = $asset_path | path relative-to $canonicalized_pwd
      $asset_path_relative
        | path basename
        | parse '{shape}.{count}.{title}.svg'
        | update count { into int }
        | insert path $asset_path_relative
    }
    | flatten
    | update title { $in | str title-case }
    | sort-by title

  log info $"($assets | length) assets left to process"
  for asset in $assets {
    let final_asset_path = $assets_dir | path join $"($asset.title).svg"
    let import_symbol = $"icon($asset.title | str pascal-case)"
    let import_path = ["./" ($final_asset_path | path relative-to src | str replace "\\" '/' --all)] | str join
    let import_line = $'import ($import_symbol) from "($import_path)";'
    let count_fragment = if count == 2 { "" } else { $", count: ($asset.count)"}

    let assist_with_new_entry = {|req|
        print ([
          $"(ansi yellow)I will copy stuff to your clipboard to help you make the edits I tell you o do in `(ansi yellow_bold)($req.file)(ansi reset)(ansi yellow)`. (ansi reset)"
          "\n\n"
          $"(ansi yellow)In the (ansi yellow_bold)imports(ansi reset)(ansi yellow)`:(ansi reset)"
          "\n\n"
          $"(ansi white_bold)($import_line)(ansi reset)"
          "\n\n"
        ] | str join)
        $import_line | clip --silent --no-notify
        pause_for_confirmation

        print ([
          $"(ansi yellow)In the `(ansi yellow_bold)($req.specs_symbol_name)(ansi reset)(ansi yellow)` export:(ansi reset)"
          "\n\n"
          $"(ansi white_bold)($req.tson_blob)(ansi reset)"
          "\n\n"
        ] | str join)
        $req.tson_blob | into string | clip --silent --no-notify
        pause_for_confirmation

        { asset_type: $req.type hand_edited_files: [$req.file] }
    }

    let edits = match $asset.shape {
      "square" => {
        do $assist_with_new_entry {
          type: "task"
          file: (["src" "tasks.tsx"] | path join)
          tson_blob: $"{\n task: {\n svgUrl: ($import_symbol), label: \"($asset.title)\", collapsed: true, }($count_fragment) },"
          specs_symbol_name: "TASKS_SPECS"
        }
      }
      "rectangle" => {
        do $assist_with_new_entry {
          type: "task"
          file: (["src" "tasks.tsx"] | path join)
          tson_blob: $"{\n task: {\n svgUrl: ($import_symbol), label: \"($asset.title)\" }($count_fragment) },"
          specs_symbol_name: "TASKS_SPECS"
        }
      }
      "circle" => {
        do $assist_with_new_entry {
          type: "pin"
          file: (["src" "pins.tsx"] | path join)
          tson_blob: $"{\n pin: {\n svgUrl: ($import_symbol), count: ($asset.count) },"
          specs_symbol_name: "PINS_SPECS"
        }
      }
      _ => {
        error make { msg: $"IDFK, figure out `($asset.shape)` shapes plz" }
      }
    }

    print "Running `pnpm run fmt`…"
    pnpm run fmt

    let files_to_commit = [...$edits.hand_edited_files $final_asset_path]
    pause_for_confirmation ([
      "Press any key to:"
      $"\n- move `($asset.path)` to `($final_asset_path)`"
      $"\n- commit ($files_to_commit | each { ['`' $in '`'] | str join } | str join ', ')"
      $"\n- continue to the next item \(or CTRL+C to exit\)"
      "\n> "
    ] | str join)
    mv $asset.path $final_asset_path
    jj commit -m $"feat: add `($asset.title)` ($edits.asset_type)" -- ...$files_to_commit
  }
}
