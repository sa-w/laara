import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useGetAllPropertiesQuery } from '../services/properties';
import { Avatar, Box, IconButton, List, ListItem, ListItemText, Paper, Stack, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Height } from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function PropertyList() {

    const { data, error, isLoading } = useGetAllPropertiesQuery();

    return (

        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {data.data.map((property) => (
                            <ListItem key={property.id} disableGutters>

                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={3}>
                                        <Grid style={{ height: '40%', width: '25%' }} size={4}>
                                            <img style={{ height: '40%', width: '25%' }} src={property.propertyImages[0].images.url}></img>
                                        </Grid>
                                        <Grid style={{ height: '40%', width: '25%' }} size={6}>
                                            <Stack spacing={2}>
                                                <>{property.name}</>
                                                <br />
                                                <>{property.description}</>

                                            </Stack>
                                        </Grid>
                                        <Grid style={{ height: '40%', width: '25%' }} size={2}>
                                            <Item>size=grow</Item>
                                        </Grid>
                                    </Grid>
                                </Box>



                                {/*<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={1}>

<Grid size={5}>
<Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={property.propertyImages[0].images.url || "/static/images/cards/contemplative-reptile.jpg"}
                                    alt={property.name || "Property Image"}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {property.name || "Unknown Property"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {property.description || "No description available."}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
        </Grid>

        <Grid size={5}>
          
        </Grid>

        <Grid size={2}>
          
          </Grid>

    </Grid> 
</Box>*/}

                                {/*<Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={property.propertyImages[0].images.url || "/static/images/cards/contemplative-reptile.jpg"}
                                    alt={property.name || "Property Image"}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {property.name || "Unknown Property"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {property.description || "No description available."}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>*/}
                                <ListItemText primary={property.name || `Property ${property.id}`} />
                                <IconButton aria-label="comment" />
                            </ListItem>
                        ))}
                    </List>
                </>
            ) : null}


        </>



    );
}
