import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  CircularProgress,

} from "@mui/material";
import { createLoginUser } from "../../services/fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateUser = async(e)=>{

     e.preventDefault()
     const user = {
        username,
        password,
      };
    const res = await createLoginUser("users/validate-user/", user);
    setLoading(false);
    if (res.ok) {
      setShowMessage(true);
      navigate("/inicio");
      
    } else {
      setShowMessage(true);
      setErrorMessage(res.data.error);
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
          {
          loading &&   
          <Box display="flex" justifyContent="center" mt={2}>
              <CircularProgress />
          </Box>
          }
          <Button variant="contained" color="primary" fullWidth onClick={validateUser}>
            Iniciar sesión
          </Button>
          {showMessage && (
            <Typography
              variant="body2"
              textAlign="center"
              color={errorMessage ? "error.main" : "success.main"}
            >
              {errorMessage || "Inicio de sesión exitoso!"}
            </Typography>
          )}


          <Typography variant="body2" textAlign="center" color="text.secondary">
            ¿Aún no tienes cuenta? <a href="/crear-cuenta">Regístrate</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormLogin;
