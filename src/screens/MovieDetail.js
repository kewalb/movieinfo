
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {useParams} from 'react-router-dom'
import { CardContent, Typography } from '@mui/material';

export default function MovieDetail(){
    const {id} = useParams()
    const [movie, setMovie] = React.useState({})
    React.useEffect(() => {
        fetch(`https://61921f02aeab5c0017105d5a.mockapi.io/movies/${id}`)
        .then(response => response.json())
        .then(data => setMovie(data))
    }, [id])
    return(
        <Card style={{maxHeight: 700, margin: 10}}>
            <CardMedia
            style={{height: 400, margin: 10}}
            component='iframe'
            src={movie.trailer}
            autoPlay
            />
            <CardContent style={{textAlign: 'center'}}>
                <Typography variant="h3">{movie.name}</Typography>
                <Typography variant="h5">{movie.summary}</Typography>
            </CardContent>
        </Card>
    )
}