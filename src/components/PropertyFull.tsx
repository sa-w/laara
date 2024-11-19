import Typography from '@mui/material/Typography';
import { useGetPropertyByIdQuery } from '../services/properties';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, ImageList, ImageListItem, Link, Paper, Rating, styled } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface PropertyFull {
  /** The property id */
  id: Number

}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function PropertyFull() {

  let { propertyId } = useParams();

  const { data, error, isLoading } = useGetPropertyByIdQuery(Number(propertyId));
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

            <Paper
              key={data.data.id}
              elevation={0}
              sx={{
                width: '100%',
                padding: 2,
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                height: 'auto',
                 border: "none"
              }}
            >
              {/* Image Column */}
             {/* Rating and Comments Column */}
             <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: "flex-start",
                  gap: 1
                 
                }}
              >
                <>
                  {() => setValue(data.data.propertyRatings ? Number(data.data.propertyRatings) : 0)}
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    defaultValue={value}
                  />
                </>
                <Typography variant="body2"><strong>{data.data.name}</strong> - {data.data.description}</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnOutlinedIcon fontSize="small" />
                    <span style={{ marginLeft: 8 }}>
                      <Link variant="body2" href={`https://maps.google.com/?q=${data.data.address.latitude},${data.data.address.longitude}`} target="_blank" rel="noopener noreferrer">{data.data.address.county}, {data.data.address.country}</Link>
                    </span>
                  </div>

              </Box>

              {/* Details Column */}
              <Box
                sx={{
                  flex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  alignItems: "flex-end",
                  height: "10%"
                }}
              >
                

                <>


                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MeetingRoomOutlinedIcon fontSize="small" />
                    <span style={{ marginLeft: 8 }}>
                      <Typography alignItems="flex-start" variant="body2">
                        Available Rooms: {data.data.rooms.length}
                      </Typography>
                    </span>
                  </div>



                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <RestaurantMenuOutlinedIcon fontSize="small" />
                    <span style={{ marginLeft: 8 }}>
                      <Typography alignItems="flex-start" variant="body2">
                        Meal options: {data.data.mealOptions.length}
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

 
            </Paper>

          </Box>







          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >

            <Paper
              key={data.data.id}
              elevation={0}
              sx={{
                width: '100%',
                padding: 0,
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                height: 'auto',
              }}
            >
              {/* Image Column */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <>

                  <ImageList
                    sx={{ width: 700, height: 450 }}
                    variant="quilted"
                    cols={8}
                    rowHeight={121}
                  >
                    {data.data.propertyImages.map((item) => (
                      <ImageListItem key={item.images.url} cols={2} rows={3}>
                        <img
                          {...srcset(item.images.url, 121, 3, 2)}
                          alt={data.data.name}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>

                </>
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
                  {() => setValue(data.data.propertyRatings ? Number(data.data.propertyRatings) : 0)}
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
                  {data.data.reviews.length} Reviews
                </Typography>
                {/*</Typography>*/}
                <Typography variant="body2">
                  <strong>Comments:</strong> {data.data.reviews.length}
                </Typography>

                <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>
                  View property
                </Button>
              </Box>
            </Paper>

          </Box>



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

            <Paper
              key={data.data.id}
              elevation={3}
              sx={{
                width: '100%',
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
                <>

                  <ImageList
                    sx={{ width: 500, height: 450 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                  >
                    {data.data.propertyImages.map((item) => (
                      <ImageListItem key={item.images.url} cols={2} rows={3}>
                        <img
                          {...srcset(item.images.url, 121, 3, 2)}
                          alt={data.data.name}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>

                </>
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
                <Typography variant="body2">{data.data.name} - {data.data.description}</Typography>

                <>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnOutlinedIcon fontSize="small" />
                    <span style={{ marginLeft: 8 }}>
                      <Link variant="body2" href={`https://maps.google.com/?q=${data.data.address.latitude},${data.data.address.longitude}`} target="_blank" rel="noopener noreferrer">{data.data.address.county}, {data.data.address.country}</Link>
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MeetingRoomOutlinedIcon fontSize="small" />
                    <span style={{ marginLeft: 8 }}>
                      <Typography alignItems="flex-start" variant="body2">
                        Available Rooms: {data.data.rooms.length}
                      </Typography>
                    </span>
                  </div>



                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <RestaurantMenuOutlinedIcon fontSize="small" />
                    <span style={{ marginLeft: 8 }}>
                      <Typography alignItems="flex-start" variant="body2">
                        Meal options: {data.data.mealOptions.length}
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
                  {() => setValue(data.data.propertyRatings ? Number(data.data.propertyRatings) : 0)}
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
                  {data.data.reviews.length} Reviews
                </Typography>
                {/*</Typography>*/}
                <Typography variant="body2">
                  <strong>Comments:</strong> {data.data.reviews.length}
                </Typography>

                <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>
                  View property
                </Button>
              </Box>
            </Paper>

          </Box>

        </>
      ) : null}

    </>

  );
}
