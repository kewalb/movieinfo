
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {useParams} from 'react-router-dom'
import { CardContent, Typography } from '@mui/material';

export default function MovieDetail({movieList}){
    const {id} = useParams()

    return(
        <Card style={{maxHeight: 700, margin: 10}}>
            <CardMedia
            style={{height: 400, margin: 10}}
            component='iframe'
            src={movieList[id].trailer}
            autoPlay
            />
            <CardContent style={{textAlign: 'center'}}>
                <Typography variant="h3">{movieList[id].name}</Typography>
                <Typography variant="h5">{movieList[id].summary}</Typography>
            </CardContent>
        </Card>
    )
}