import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useGetAllPropertiesQuery } from '../services/properties';
import { Avatar, Box, Button, Divider, IconButton, Link, List, ListItem, ListItemAvatar, ListItemText, Paper, Rating, Stack, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Height } from '@mui/icons-material';
import { useId, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import FlatwareOutlinedIcon from '@mui/icons-material/FlatwareOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';


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
    const [value, setValue] = useState<number>(0);

    return (

        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                            width: '100%',
                            padding: 2,
                        }}
                    >
                        {data.data.map((property) => (
                            <Paper
                                key={property.id}
                                elevation={3}
                                sx={{
                                    width: '80%',
                                    padding: 2,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                    height: 'auto',
                                }}
                            >
                                {/* Image Column */}
                                <Box
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: "flex-start",
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src={property.propertyImages[0].images.url}
                                        alt={property.name}
                                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                                    />
                                </Box>

                                {/* Details Column */}
                                <Box
                                    sx={{
                                        flex: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1,
                                        alignItems: "flex-start",
                                        height: "10%"
                                    }}
                                >
                                    <Typography variant="body2">{property.name} - {property.description}</Typography>
                                  
                                    <>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <LocationOnOutlinedIcon fontSize="small" />
                                            <span style={{ marginLeft: 8 }}>
                                                <Link variant="body2" href={`https://maps.google.com/?q=${property.address.latitude},${property.address.longitude}`} target="_blank" rel="noopener noreferrer">{property.address.county}, {property.address.country}</Link>
                                            </span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <MeetingRoomOutlinedIcon fontSize="small" />
                                            <span style={{ marginLeft: 8 }}>
                                            <Typography alignItems="flex-start" variant="body2">
                                                Available Rooms: {property.rooms.length}
                                            </Typography>
                                            </span>
                                        </div>
                                        
                                            

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <RestaurantMenuOutlinedIcon fontSize="small" />
                                            <span style={{ marginLeft: 8 }}>
                                            <Typography alignItems="flex-start" variant="body2">
                                                Meal options: {property.mealOptions.length}
                                            </Typography>
                                            </span>
                                        </div>


                                        
                                    </>
                                    {/*<List >
                                        {property.rooms.map((rooms) => (

                                            <><ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Avatar alt="room type image" src={rooms.roomTypes.roomTypeImages[0].images.url} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={`${rooms.roomTypes.name} Room`}
                                                    secondary={<React.Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            sx={{ color: 'text.primary', display: 'inline' }}
                                                        >
                                                            {rooms.roomTypes.description}
                                                        </Typography>

                                                    </React.Fragment>} />
                                            </ListItem><Divider variant="inset" component="li" /></>

                                        ))}

                                    </List> */}

                                </Box>

                                {/* Rating and Comments Column */}
                                <Box
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: "flex-end",
                                        gap: 1,
                                    }}
                                >
                                    <>
                                        {() => setValue(property.propertyRatings?property.propertyRatings:0)}
                                        <Rating
                                            name="simple-uncontrolled"
                                            onChange={(event, newValue) => {
                                                console.log(newValue);
                                            }}
                                            defaultValue={value}
                                        />
                                    </>
                                    {/*</Typography>*/}
                                    <Typography variant="body2">
                                        {property._count.reviews} Reviews
                                    </Typography>
                                    {/*</Typography>*/}
                                    <Typography variant="body2">
                                        <strong>Comments:</strong> {property._count.reviews}
                                    </Typography>

                                    <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>
  View property
</Button>
                                </Box>
                            </Paper>
                        ))}
                    </Box>


                    {/*<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                                </Box> */}



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
                    {/* <ListItemText primary={property.name || `Property ${property.id}`} />
                                <IconButton aria-label="comment" />
                            </ListItem>
                        ))}
                    </List>*/}
                </>
            ) : null}


        </>



    );
}
