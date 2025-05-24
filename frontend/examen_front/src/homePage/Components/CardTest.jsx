import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Typography } from '@mui/material';

const CardTest=({title,date_created,img,description,click})=>{
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
  return (
    <Card  sx={{ maxWidth: 345,border:"1px solid #ccc",borderRadius:"10px",margin:"20px",boxShadow:"0 4px 8px rgba(0,0,0,0.2)" }} onClick={click} className='card-test'>
      <CardHeader
        onClick={click}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader={formatDate(date_created)}
      />
      <CardMedia
        onClick={click}
        component="img"
        height="194"
        image={img}
        alt="img test"
      />
      <Typography variant="body2" color="text.secondary" textAlign={'center'} padding={'10px'}>
        {description}
      </Typography>
    </Card>
  );
}
export default CardTest;
