import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { App } from "./App";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MantineProvider>
      <App />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 1400 }}
      />
    </MantineProvider>
  </BrowserRouter>
);
