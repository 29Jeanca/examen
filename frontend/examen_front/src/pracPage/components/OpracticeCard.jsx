import { Card, CardContent, Typography } from '@mui/material';

const OpracticeCard = ({ question, explanation }) => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Pregunta:
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {question}
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Explicación:
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {explanation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OpracticeCard;
