import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import "./index.css";
import { store } from "./lib/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
