import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import "./index.css";
import { store } from "./lib/store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MantineProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />
    </MantineProvider>
  </Provider>,
);
