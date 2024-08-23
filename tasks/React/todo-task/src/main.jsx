import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoContextComponent from "./context/todos.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <TodoContextComponent>
  <>
    <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
    <App />
  </>
  // </TodoContextComponent>
  // </StrictMode>
);
