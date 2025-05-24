import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" fontWeight="bold" color="primary" >
            <h1 onClick={()=>navigate("/inicio")}>PracticAcá</h1>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
