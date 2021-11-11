import React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Button, Collapse, Grid} from '@mui/material';
import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Edit } from '@mui/icons-material';
import { useParams } from "react-router-dom";

function EditMovie({movieList, addToMovie}){

    const {id} = useParams()
    console.log(id)
    const [expanded, setExpanded] = useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
    
      // form states and actions
    
      const ratingRef = useRef('')
      const trailerRef = useRef('')
      const nameRef = useRef('')
      const posterRef = useRef('') 
      const summaryRef = useRef('')
      
     const handleSubmit = (e) => {
         const items = [...movieList]
        const newMovie = {
          trailer: trailerRef.current.value,
          name: nameRef.current.value,
          poster: posterRef.current.value,
          summary: summaryRef.current.value,
          rating: ratingRef.current.value
        }
        const item = {
            ...movieList[id],
            trailer: newMovie.trailer,
            name: newMovie.name,
            poster: newMovie.poster,
            summary: newMovie.summary,
            rating: newMovie.rating 
        }
        items[id] = item
        addToMovie(items)
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

      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: 'mintcream',
        color: theme.palette.text.secondary,
      }));
      

    return(
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
          Edit Movie<Edit style={{marginLeft:"3px"}} fontSize="small"></Edit>
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
      
        <TextField 
        defaultValue={movieList[id].trailer} 
        id="trailer" 
        label="Enter trailer url" 
        variant="standard" 
        inputRef={trailerRef} 
        style={{margin: "10px"}} />


        <TextField 
        defaultValue={movieList[id].name} 
        id="name" label="Enter Movie Name" 
        variant="standard" 
        inputRef={nameRef} 
        style={{margin: "10px"}}/>


        <TextField 
        defaultValue={movieList[id].poster} 
        id="poster" label="Enter Poster URL" 
        variant="standard" 
        inputRef={posterRef} 
        style={{margin: "10px"}}/>


        <TextField 
        defaultValue={movieList[id].summary} 
        id="summary" 
        label="Enter Movie Summary" 
        variant="standard" 
        inputRef={summaryRef} 
        style={{margin: "10px"}}/>


        <TextField 
        defaultValue={movieList[id].rating} 
        id="rating" label="Enter Movie Rating" 
        variant="standard" 
        inputRef={ratingRef} 
        style={{margin: "10px"}}/>


        <Button variant="outlined" onClick={handleSubmit} style={{margin: "10px"}}>Submit</Button>
      
         </Box>
        </Collapse>
      </Item>
    </Grid>
    </Grid>
    )
}

export default EditMovie;