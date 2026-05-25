import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ScrollToTop } from "@/utils/scrollToTop";
import AuthProvider from "@/context/AuthProvider";

import { HelmetProvider } from "react-helmet-async";

export const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};
