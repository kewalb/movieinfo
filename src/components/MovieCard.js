import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Delete, Edit, ThumbDown, ThumbUp } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
 


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
export default function MovieCard({movieId, name, poster, summary, rating, movieList, addToMovie}) {
    const [expanded, setExpanded] = React.useState(true);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [like, setLike] = React.useState(0)
    const [dislike, setDislike] = React.useState(0)

    const addLike = () => {
      setLike(like+1)
    }

    const addDislike = () => {
      setDislike(dislike+1)
    }

    const history = useHistory()
  
    return (
      <Card sx={{ maxWidth: 345, maxHeight: 650 }} style={{margin: "15px"}} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="movie">
              {name[0]}
            </Avatar>
          }
          
          title={name}
          subheader="September 14, 2016"
        />
        <CardMedia
        onClick={() => history.push(`/movie/${movieId}`)}
          component="img"
          height="300"
          image={poster}
          alt="Movie image"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={addLike}>
            <ThumbUp variant='outline' /><Typography style={{margin: '2px'}}>{like}</Typography>
          </IconButton>
          <IconButton aria-label="share" onClick={addDislike}>
            <ThumbDown variant='outlined' /><Typography style={{margin: '2px'}}>{dislike}</Typography>
          </IconButton>
          <IconButton aria-label="delete" onClick={()=>{
            addToMovie(movieList.filter((x, index) => index!==movieId))
          }}>
            <Delete variant='outlined' style={{color:'red'}}/><Typography style={{margin: '2px'}}></Typography>
          </IconButton>
          <IconButton aria-label="edit" onClick={() => history.push(`/edit/${movieId}`)}>
            <Edit variant='outlined' style={{color: 'blue'}}/><Typography style={{margin: '2px'}}></Typography>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
        
         <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Summary:</Typography>
            <Typography paragraph>
              {summary}
            </Typography>
            <Typography paragraph>
              Rating: {rating}
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>
    );
  }