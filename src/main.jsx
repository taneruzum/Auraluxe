import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import "./index.css";
import { store } from "./lib/store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MantineProvider>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2500}
      >
        <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />
      </SnackbarProvider>
    </MantineProvider>
  </Provider>,
);
