import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App";
import GlobalStyles from "./theme/GlobalStyles";
import AuthContextProvider from "./state/context/AuthContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
        <GlobalStyles />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
