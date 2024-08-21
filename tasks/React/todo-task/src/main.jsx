import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoContextComponent from "./context/todos.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <TodoContextComponent>
    <App />
  </TodoContextComponent>
  // </StrictMode>
);
