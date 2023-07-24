import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";

const RootLayout = () => {
  return (
    <AnimatePresence>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Outlet />
      </Box>
    </AnimatePresence>
  );
};

export default RootLayout;
