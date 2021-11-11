import React from "react";
import {Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MovieCard from "../components/MovieCard";

function Home({movieList, addToMovie}){

   
      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: 'mintcream',
        color: theme.palette.text.secondary,
      }));     

    return(

    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     
      {movieList.map((movie, index) => (
       <Grid item xs={2} sm={4} md={4} key={index}>
       <Item style={{ maxHeight:'700px', margin: '10px'}}>
      <MovieCard key={index} movieId={index} name={movie.name} poster={movie.poster} summary={movie.summary} rating={movie.rating} movieList={movieList} addToMovie={addToMovie} />
      </Item>
     </Grid>
     ))}
     
   </Grid>
    )
}

export default Home;