import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { createLoginUser } from "../../services/fetch";

const FormRegister = () => {
  const [preview, setPreview] = useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile_picture, setProfile_picture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowMessage(false);
    setErrorMessage("");

    const user = {
      username,
      email,
      password,
      profile_picture,
    };

    const res = await createLoginUser("users/create-user/", user);

    setLoading(false);

    if (res.ok) {
      setShowMessage(true);
    } else {
      setErrorMessage(res.data?.error || "Ocurrió un error al crear el usuario.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile_picture(file.name); 
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Correo Electrónico"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />

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

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={createUser}
            disabled={loading}
          >
            Registrarse
          </Button>

          {loading && (
            <Box display="flex" justifyContent="center" mt={2}>
              <CircularProgress />
            </Box>
          )}

          {showMessage && (
            <Typography
              variant="body2"
              color="success.main"
              textAlign="center"
            >
              Usuario creado exitosamente. ¡Bienvenido!
            </Typography>
          )}

          {errorMessage && (
            <Typography
              variant="body2"
              color="error"
              textAlign="center"
              sx={{ mt: 1 }}
            >
              {errorMessage}
            </Typography>
          )}

          <Typography variant="body2" textAlign="center" color="text.secondary">
            ¿Ya tienes una cuenta? <a href="/">Inicia sesión</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormRegister;
