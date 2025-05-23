import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const PracticeCard = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345,border:"1px solid #ccc",borderRadius:"10px",margin:"20px",boxShadow:"0 4px 8px rgba(0,0,0,0.2)" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <CardMedia
            component="img"
            height="100%"
            image={image}
            alt={title}
            sx={{ height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent>
            <Typography variant="h6" gutterBottom>{title}</Typography>
            <Typography variant="body2" color="textSecondary">{description}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PracticeCard;
