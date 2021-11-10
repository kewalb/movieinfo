import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import React, {useState} from 'react';
import { Container } from '@mui/material';


export default function ColorChange(){
    
    const [color, setColor] = useState("")
    const style = {
        background: color,
        margin: 20,
    }
    const handleChange = (e) => {
        setColor(e.target.value)
    }

    const [colors, setColorList] = useState([])

    const addToList = () => {
        setColorList([...colors, color])
        console.log(colors)
    }

    return(
        <Container style={{textAlign: 'center'}}>
                <TextField id="id" label="Enter Color Name" variant="outlined" onChange={handleChange} style={style} fullWidth/> <br/>
                <Button variant='outlined' color="success" style={{margin: 15}} onClick={addToList}>Submit</Button>
                
                    {colors.map((c) => (
                        <Container style={{height: 35, width: '50%', backgroundColor:c, marginTop:10, textAlign: "center"}}></Container>
                    ))}
                
        </Container>
    )
}