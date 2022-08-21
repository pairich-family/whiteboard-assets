import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { PINS_SPECS } from "./pins";
import { TASKS_SPECS } from "./tasks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App pins={PINS_SPECS} tasks={TASKS_SPECS} />
  </React.StrictMode>
);
