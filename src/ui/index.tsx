import { createRoot } from "react-dom/client";

import { Hello } from "./Hello";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);
root.render(<Hello />);
