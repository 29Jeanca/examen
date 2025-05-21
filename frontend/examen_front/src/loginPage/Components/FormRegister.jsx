import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";

const FormRegister = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

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
            Crear Cuenta
          </Typography>

          <TextField
            label="Nombre de Usuario"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Correo Electrónico"
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

          {/* Foto de perfil */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src={preview}
              alt="Foto de perfil"
              sx={{ width: 56, height: 56 }}
            />
            <Button variant="outlined" component="label">
              Subir foto
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </Button>
          </Box>

          <Button variant="contained" color="primary" fullWidth>
            Registrarse
          </Button>

          <Typography variant="body2" textAlign="center" color="text.secondary">
            ¿Ya tienes una cuenta? <a href="/">Inicia sesión</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormRegister;
