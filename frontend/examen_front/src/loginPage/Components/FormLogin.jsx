import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const FormLogin = () => {
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
            label="Correo electrónico"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            variant="outlined"
          />
          <Button variant="contained" color="primary" fullWidth>
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
