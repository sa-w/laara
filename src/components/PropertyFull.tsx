import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useGetPropertyByIdQuery } from '../services/properties';

interface PropertyFull {
    /** The property id */
    id: Number

  }

export default function PropertyFull({id} : PropertyFull) {

    const { data, error, isLoading } = useGetPropertyByIdQuery(id);

    

        console.log(`DATA 1 IS ------> ${JSON.stringify(data)}`)
        console.log(`DATA 2 IS ------> ${error}`)
        console.log(`DATA 3 IS ------> ${isLoading}`)

 

  return (

    <>

    {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.data.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </>
      ) : null}


    </>

  );
}
