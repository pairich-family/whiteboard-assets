import "./tasks.css";

import { FC } from "react";

import iconAbcMouse from "./assets/ABC Mouse.svg";
import iconArt from "./assets/Art.svg";
import iconBreakfast from "./assets/Breakfast.svg";
import iconBrushTeeth from "./assets/Brush teeth.svg";
import iconDayClothes from "./assets/Day clothes.svg";
import iconDoHair from "./assets/Do hair.svg";
import iconGeography from "./assets/Geography.svg";
import iconMakeBed from "./assets/Make bed.svg";
import iconMath from "./assets/Math.svg";
import iconNightClothes from "./assets/Night clothes.svg";
import iconReading from "./assets/Reading.svg";
import iconScience from "./assets/Science.svg";
import iconStorytime from "./assets/Storytime.svg";
import iconWriting from "./assets/Writing.svg";

export interface TaskProps {
  svgUrl: string;
  label: string;
  collapsed?: boolean;
}

export const Task: FC<TaskProps> = ({ svgUrl, label, collapsed }) => {
  return (
    <div className={["task", "dotted"].join(" ") + (collapsed ? " task-collapsed" : "")}>
      <div className="icon">
        <img src={svgUrl} alt={label} title={label} />
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export interface TasksSpec {
  task: TaskProps;
  count?: number;
}

export const TASKS_SPECS: TasksSpec[] = [
  {
    task: {
      svgUrl: iconDoHair,
      label: "Do hair",
      collapsed: true,
    },
  },
  {
    task: {
      svgUrl: iconAbcMouse,
      label: "ABC Mouse",
    },
  },
  {
    task: {
      svgUrl: iconArt,
      label: "Art",
    },
  },
  {
    task: {
      svgUrl: iconBreakfast,
      label: "Breakfast",
      collapsed: true,
    },
  },
  {
    task: {
      svgUrl: iconBrushTeeth,
      label: "Brush teeth",
      collapsed: true,
    },
    count: 4,
  },
  {
    task: {
      svgUrl: iconGeography,
      label: "Geography",
    },
  },
  {
    task: {
      svgUrl: iconDayClothes,
      label: "Day clothes",
      collapsed: true,
    },
  },
  {
    task: {
      svgUrl: iconMakeBed,
      label: "Make bed",
    },
  },
  {
    task: {
      svgUrl: iconMath,
      label: "Math",
    },
  },
  {
    task: {
      svgUrl: iconNightClothes,
      label: "Night clothes",
      collapsed: true,
    },
  },
  {
    task: {
      svgUrl: iconReading,
      label: "Reading",
    },
  },
  {
    task: {
      svgUrl: iconScience,
      label: "Science",
    },
  },
  {
    task: {
      svgUrl: iconStorytime,
      label: "Storytime",
    },
  },
  {
    task: {
      svgUrl: iconWriting,
      label: "Writing",
    },
  },
];
