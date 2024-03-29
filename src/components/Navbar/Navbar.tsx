import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inicio Clean REact App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
