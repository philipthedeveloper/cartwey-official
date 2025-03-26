import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import { App } from "./App";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MantineProvider>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
