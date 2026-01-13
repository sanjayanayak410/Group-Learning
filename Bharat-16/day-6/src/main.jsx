import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./state/redux/store";
import { ThemeProvider } from "./state/context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
