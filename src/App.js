import React from 'react';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faPlayCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { Row, Col, Container} from 'react-bootstrap'


function App() {

  const movieList = [
    {
      id: 1,
      name: "The Shawshank Redemption (1994)",
      poster: "https://lh3.googleusercontent.com/proxy/ymkfn3wn9pr51o4ifZ7SnxxQBI3aLfO_J63wd53QimLULp8-GV5mx4batyKr8zjVA9CxJb1v89nzBVz2QVmtZmYjsUgUqFoINU-bmJPwrW0Qiubdj7jwZhrHUkCBp7lQ6b62i6VtYshbZz2Py_gP1-S6",
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
  ]
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>TOP 6 MOVIES</h1>
      <Row style={{margin:'10px', textAlign: 'center'}}>
          {
          movieList.map(x => (
          <Col sm={12} md={6} lg={4} xl={3} key={x.id} >
              <MovieCard name={x.name} poster={x.poster} summary={x.summary} rating={x.rating} />
          </Col>
          ))
        }
        </Row>  
    </div>
  );
}

export default App;


function MovieCard({name, poster, rating, summary}){



  console.log(name, poster, rating, summary)
  return(

  <Card style={{  textAlign: 'center'}} className="my-3 p-3 rounded ">
  <Card.Img variant="top" src={poster} style={{width: '38rem'}} className='img-fluid'/>
  <Card.Body>
    <Card.Title style={{ textAlign: 'center' }}><h2>{name}</h2></Card.Title>
    <Card.Text style={{ textAlign: 'center' }}>
     {summary}
    </Card.Text>
    <Card.Text style={{ textAlign: 'center' }}>
    Rating: {rating}
    </Card.Text>

  </Card.Body>
</Card>

  )
}