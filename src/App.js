import './App.css';
import Home from './screens/Home';
import ColorChange from './screens/Color';
import AddMovie from './screens/AddMovie';
import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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


  return (
    <Router>
    <div>
      <AppBar position="static" >
        <Toolbar variant="dense">
          <Link to='/' style={{textDecoration: 'none', color: 'whitesmoke'}}>
              <h3 style={{ marginLeft:30 }}>MovieApp</h3>
          </Link>
          <Link to='/'  style={{textDecoration: 'none', color: 'whitesmoke'}}>
          <Typography variant="h6"  style={{ marginLeft:30 }}>
            Home
          </Typography>
          </Link>
          <Link to='add-movie'  style={{textDecoration: 'none', color: 'whitesmoke'}}>
          <Typography variant="h6"  style={{ marginLeft:30 }}>
            Add Movie
          </Typography>
          </Link>
          <Link to='color-game'  style={{textDecoration: 'none', color: 'whitesmoke'}}>
          <Typography variant="h6"  style={{ marginLeft:30 }}>
           ColorGame
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>


        <Switch>
          <Route exact path="/">
            <Home movieList={movieList} addToMovie={addToMovie}/>
          </Route>
          <Route path="/add-movie">
            <AddMovie movieList={movieList} addToMovie={addToMovie}/>
          </Route>
          <Route path="/color-game">
            <ColorChange />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;