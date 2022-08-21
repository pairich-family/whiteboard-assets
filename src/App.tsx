import "./App.css";

import { FC } from "react";
import { Pin, PinsSpec } from "./pins";
import { Task, TasksSpec } from "./tasks";

export interface AppProps {
  pins: PinsSpec[];
  tasks: TasksSpec[];
}

export function App(props: AppProps) {
  const { pins, tasks } = props;
  let pinCounter = 0;
  let taskCounter = 0;

  return (
    <>
      <div className="pins">
        {pins.flatMap(({ count, pin }) =>
          Array.from({ length: count ?? 1 }).map(() => (
            <Pin {...pin} key={(pinCounter++).toString()} />
          ))
        )}
      </div>
      {/*
      NOTE: printing these after full page(s) of pins causes odd overlaps that have not been
      resolved yet!
      */}
      <div className="tasks">
        {tasks.flatMap(({ count, task }, idx) =>
          Array.from({ length: count ?? 2 }).map(() => (
            <Task {...task} key={(taskCounter++).toString()} />
          ))
        )}
      </div>
    </>
  );
}
