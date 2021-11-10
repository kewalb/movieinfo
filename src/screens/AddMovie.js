import React from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Button, Collapse, Grid} from '@mui/material';
import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function AddMovie({movieList, addToMovie}){

    console.log(movieList)
    const [expanded, setExpanded] = useState(false);
      
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
    </Grid>
    )
}

export default AddMovie;