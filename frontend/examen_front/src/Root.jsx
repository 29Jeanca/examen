import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Routing from "./routes/Routing";
import { getTheme } from "./services/theme";

const Root = () => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div style={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }}>
  <IconButton onClick={toggleMode} color="inherit">
    {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
  </IconButton>
</div>
      <Routing />
    </ThemeProvider>
  );
};

export default Root;
