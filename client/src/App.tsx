import React from "react";

import { RouterProvider } from "react-router-dom";
import router from "./routes";

import ThemeProvider from "./theme";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { MotionContainer } from "./Components/animate";
import SnackbarProvider from "./Components/snackbar";
import { PasswordProvider } from "./context/passwordContext";

const Onboard: React.FC<{}> = () => {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <MotionContainer>
          <SnackbarProvider>
            <PasswordProvider>
              <RouterProvider router={router} />
            </PasswordProvider>
          </SnackbarProvider>
        </MotionContainer>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default Onboard;