import { Card, CardContent, Typography } from '@mui/material';

const InfoCard = ({ title, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
