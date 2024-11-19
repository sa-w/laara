import Typography from '@mui/material/Typography';
import { useGetAllPropertiesQuery } from '../services/properties';
import { Box, Button, Link, Paper, Rating, styled } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { useState } from 'react';

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
                                        {() => setValue(property.propertyRatings ? property.propertyRatings : 0)}
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

                </>
            ) : null}

        </>

    );
}
