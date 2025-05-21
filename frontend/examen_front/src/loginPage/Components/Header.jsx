import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" fontWeight="bold" color="primary">
          PractiConnect
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
