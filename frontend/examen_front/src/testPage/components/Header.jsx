import { AppBar, Toolbar, Typography, Box, Stack, Button } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
const Header = ({ test, questionQuantity }) => {
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);
  const intervalRef = useRef(null);

  const cronometer = () => {
    if (active) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setActive(false);
    } else {
      intervalRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      setActive(true);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '1rem 2rem',
        }}
      >
        <Button variant='outlined' onClick={cronometer}>
          {active ? "Pausar crónometro" : "Reanudar cronómetro"}
        </Button>

        <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
          {test}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Typography variant="body1" color="textSecondary">
            🕒 {timer}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            ❓ {questionQuantity} preguntas
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
