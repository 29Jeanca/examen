import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              PracticaAcá
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Enlaces útiles
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="https://github.com/29Jeanca" target="_blank" rel="noopener" underline="hover">
                GitHub del creador
              </Link>
              <Link href="/ayuda" underline="hover">
                Centro de ayuda
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} PractiConnect. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
