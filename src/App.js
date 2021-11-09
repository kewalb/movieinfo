import { useState, useRef } from 'react';
import { Button, Collapse, Grid} from '@mui/material';
import './App.css';
import MovieCard from './MovieCard';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

function App() {

  const [movieList, addToMovie] = useState([
    {
      id: 1,
      name: "The Shawshank Redemption (1994)",
      poster: "https://rukminim1.flixcart.com/image/416/416/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70",
      summary: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating: "9.3/10"
    },

    {
      id: 2,
      name:"The Godfather",
      poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      summary: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      rating: "9.2/10"
    },

    {
      id: 3,
      name: "The Dark Knight",
      poster: "https://images-na.ssl-images-amazon.com/images/I/91ebheNmoUL._RI_.jpg",
      summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: "9.0/10"
    },
    
    {
      id: 4,
      name: "12 Angry Men",
      poster: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/04/head.v1.cropped.jpg",
      summary: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
      rating: "9.0/10"
    },

    {
      id: 5,
      name: "Schindler's List",
      poster: "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2018/10/schindler2018_poster.jpg",
      summary: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      rating: "8.9/10"
    }, 

    {
      id: 6,
      name: "The Lord of the Rings: The Return of the King",
      poster: "https://sm.ign.com/ign_ap/screenshot/default/the-lord-of-the-rings-the-return-of-the-king-59b7d7a3775bf_dhkf.jpg",
      summary: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      rating: "8.9/10"
    }
  ])

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: 'mintcream',
    color: theme.palette.text.secondary,
  }));

  const [expanded, setExpanded] = useState(true);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  // form states and actions

  const ratingRef = useRef('')
  const idRef = useRef('')
  const nameRef = useRef('')
  const posterRef = useRef('') 
  const summaryRef = useRef('')
  
 const handleSubmit = (e) => {
    const newMovie = {
      id: idRef.current.value,
      name: nameRef.current.value,
      poster: posterRef.current.value,
      summary: summaryRef.current.value,
      rating: ratingRef.current.value
    }
    console.log(newMovie)
    addToMovie([...movieList, newMovie])
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     <Grid item xs={12} style={{marginTop: "10px"}}>
      <Item>
        <ExpandMore 
        variant="contained" 
        color="success"
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        style={{margin:"10px"}}
        >
          Add Movie<AddCircleOutlineOutlinedIcon style={{marginLeft:"3px"}} fontSize="small"></AddCircleOutlineOutlinedIcon>
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      
        <TextField id="id" label="Enter Movie ID" variant="standard" inputRef={idRef} style={{margin: "10px"}}/>
        <TextField id="name" label="Enter Movie Name" variant="standard" inputRef={nameRef} style={{margin: "10px"}}/>
        <TextField id="poster" label="Enter Poster URL" variant="standard" inputRef={posterRef} style={{margin: "10px"}}/>
        <TextField id="summary" label="Enter Movie Summary" variant="standard" inputRef={summaryRef} style={{margin: "10px"}}/>
        <TextField id="rating" label="Enter Movie Rating" variant="standard" inputRef={ratingRef} style={{margin: "10px"}}/>
        <Button variant="outlined" onClick={handleSubmit} style={{margin: "10px"}}>Submit</Button>
      
    </Box>
    </Collapse>
      </Item>
    </Grid>
      {movieList.map((movie) => (
       <Grid item xs={2} sm={4} md={4} key={movie.id}>
       <Item>
      <MovieCard key={movie.id} name={movie.name} poster={movie.poster} summary={movie.summary} rating={movie.rating} />
      </Item>
     </Grid>
     ))}
     
   </Grid>
  );
}

export default App;