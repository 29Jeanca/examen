import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { createLoginUser } from "../../services/fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validateUser = async(e)=>{
     e.preventDefault()
     const user = {
        username,
        password,
      };
    const res = await createLoginUser("users/validate-user/", user);
    if (res.ok) {
      console.log("Inicio de sesión exitoso");
      navigate("/inicio");
    } else {
      console.error("Error en el inicio de sesión");
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          borderRadius: 3,
          p: 4,
          width: "100%",
        }}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Iniciar Sesión
          </Typography>
          <TextField
            label="Usuario"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={validateUser}>
            Iniciar sesión
          </Button>
          <Typography variant="body2" textAlign="center" color="text.secondary">
            ¿Aún no tienes cuenta? <a href="/crear-cuenta">Regístrate</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormLogin;
