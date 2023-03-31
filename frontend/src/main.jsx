import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App";
import GlobalStyles from "./theme/GlobalStyles";
import AuthContextProvider from "./state/context/AuthContext";
import ContactsContextProvider from "./state/context/ContactsConext";
import ThemeProvider from "./state/context/ThemeContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ContactsContextProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ContactsContextProvider>
        {/* <GlobalStyles /> */}
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
