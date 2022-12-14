import "./tasks.css";

import { FC } from "react";

import iconAbcMouse from "./assets/ABC Mouse.svg";
import iconArt from "./assets/Art.svg";
import iconBreakfast from "./assets/Breakfast.svg";
import iconBrushTeeth from "./assets/Brush teeth.svg";
import iconDoHair from "./assets/Do hair.svg";
import iconGeography from "./assets/Geography.svg";
import iconGetDressed from "./assets/Get dressed.svg";
import iconMakeBed from "./assets/Make bed.svg";
import iconMath from "./assets/Math.svg";
import iconReading from "./assets/Reading.svg";
import iconScience from "./assets/Science.svg";
import iconStorytime from "./assets/Storytime.svg";
import iconWriting from "./assets/Writing.svg";

export interface TaskProps {
  svgUrl: string;
  label: string;
  additionalMargin?: string;
}

export const Task: FC<TaskProps> = ({ svgUrl, label }) => {
  return (
    <div className={["task", "dotted"].join(" ")}>
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
    }
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
    },
  },
  {
    task: {
      svgUrl: iconBrushTeeth,
      label: "Brush teeth",
    },
  },
  {
    task: {
      svgUrl: iconGeography,
      label: "Geography",
    },
  },
  {
    task: {
      svgUrl: iconGetDressed,
      label: "Get dressed",
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
