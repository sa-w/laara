import Typography from '@mui/material/Typography';
import { useGetPropertyByIdQuery } from '../services/properties';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, Card, CardContent, Divider, ImageList, ImageListItem, Link, List, ListItem, Paper, Rating } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import ErrorComponent from './ErrorComponent';

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
type AccessibilityFeaturesProps = {
  category:
  | string
  | "general"
  | "bedroom"
  | "entrance"
  | "bathroom"
  | "interior"
  | "common"
  | "kitchen"
  | "communication"
  | "Children"
  | "Pets"
  | "Check-Out"
  | "Check-In";
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  fontSize?: "inherit" | "small" | "medium" | "large";
};
function AccessibilityFeaturesIcons({ category, color, fontSize }: AccessibilityFeaturesProps) {

  if (category === "general") {
    return (<BedroomParentOutlinedIcon color={color} fontSize={fontSize} />);
  } else if (category === "bedroom") {

    return (<BedroomParentOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "entrance") {

    return (<DoorBackOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "bathroom") {

    return (<BathroomOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "interior") {

    return (<AddHomeWorkOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "common") {

    return (<RectangleOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "kitchen") {

    return (<CountertopsOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "communication") {

    return (<LocalPhoneOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "Children") {

    return (<ChildCareOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "Pets") {

    return (<PetsOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "Check-Out") {

    return (<AccessAlarmOutlinedIcon color={color} fontSize={fontSize} />);

  } else if (category === "Check-In") {

    return (<AccessAlarmOutlinedIcon color={color} fontSize={fontSize} />);

  } else {

    return (<CheckBoxOutlinedIcon color={color} fontSize={fontSize} />);

  }
}

export default function PropertyFull() {

  let { propertyId } = useParams();

  const { data, error, isLoading } = useGetPropertyByIdQuery(Number(propertyId));
  const [value, setValue] = useState<number>(0);

  return (

    <>
      {error ? (
        <ErrorComponent/>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (

        <>

          <Paper
            key={data.data.id}
            elevation={0}
            sx={{
              width: '100%',
              padding: 0,
              display: 'flex',
              flexDirection: 'row',
              //gap: 2,
              height: 'auto',
              border: "none"
            }}
          >
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
                    console.log(event, newValue);
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
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: "flex-end",
                height: "10%"
              }}
            >


              <>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginLeft: 20 }}>
                    <FavoriteBorderOutlinedIcon color="primary" fontSize="medium" />
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <ShareOutlinedIcon color="primary" fontSize="medium" />
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <Button variant="contained" endIcon={<BookmarkAddOutlinedIcon />}>
                      Reserve
                    </Button>
                  </span>
                </div>



                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginLeft: 20 }}>
                    <LocalOfferOutlinedIcon color="primary" fontSize="small" />
                  </span>
                  <span style={{ marginLeft: 8 }}>
                    <Typography alignItems="flex-start" color="primary" variant="body2">
                      Low price
                    </Typography>
                  </span>
                </div>



              </>

            </Box>


          </Paper>

          <Paper
            key={data.data.id}
            elevation={0}
            sx={{
              width: '100%',
              padding: 0,
              display: 'flex',
              flexDirection: 'row',
              //gap: 1,
              height: '40%',
            }}
          >
            {/* Property Images */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "flex-start",
                padding: 2,
                gap: 1,
              }}
            >
              <>

                <ImageList
                  sx={{ height: 350 }}
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


            {/* Food images */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "flex-start",
                padding: 2,
                gap: 1,
              }}
            >
              <>

                <ImageList
                  sx={{ height: 350 }}
                  variant="quilted"
                  cols={4}
                  rowHeight={121}
                >
                  {data.data.foodImages.map((item) => (
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

          </Paper>

          {/*Accessibility Features*/}
          <Box
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: "flex-start",
              height: "10%",
              width: '100%',
            }}
          >

            <>
              <Card elevation={0} sx={{ marginLeft: 0 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 2 }}>
                  <Typography variant="body2" component="div">
                    <strong>Accessibility features</strong>
                  </Typography>
                  <Divider />
                  <List sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: 0,
                  }}>
                    {data.data.accessibilityFeatures.map((features) => (
                      <ListItem disablePadding sx={{ width: "auto" }}>
                        <>
                          <div style={{ display: 'flex', alignItems: 'center' }}>

                            <AccessibilityFeaturesIcons color="primary" fontSize="small" category={features.features.category} />

                            <span style={{ marginLeft: 8, marginRight: 20 }}>

                              {features.features.feature}

                            </span>
                          </div>
                        </>
                      </ListItem>
                    ))
                    }

                  </List>

                </CardContent>
              </Card>

            </>

          </Box>

          {/*Property Amenities*/}
          <Box

            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: "flex-start",
              height: "10%",
              width: '100%',
            }}
          >

            <>
              <Card elevation={0} sx={{ marginLeft: 0 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 2 }}>
                  <Typography variant="body2" component="div">
                    <strong>Property Amenities</strong>
                  </Typography>
                  <List sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: 0,
                  }}>
                    {data.data.propertyAmenities.map((propertyAmenities) => (
                      <ListItem disablePadding sx={{ width: "auto" }}>
                        <>
                          <div style={{ display: 'flex', alignItems: 'center' }}>

                            <AccessibilityFeaturesIcons color="primary" fontSize="small" category={propertyAmenities.amenities.category} />

                            <span style={{ marginLeft: 8, marginRight: 20 }}>
                              {propertyAmenities.amenities.description}

                            </span>
                          </div>
                        </>
                      </ListItem>
                    ))
                    }

                  </List>

                </CardContent>
              </Card>
            </>

          </Box>

          {/*Property Policies*/}
          <Box

            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: "flex-start",
              height: "10%",
              width: '100%',
            }}
          >

            {/* Property policies */}

            <Typography sx={{ padding: 2 }} variant="body2" component="div">
              <strong>Property Policies</strong>
            </Typography>

            <Paper
              key={data.data.id}
              elevation={1}
              sx={{
                width: '100%',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: 'auto',
                border: "none"
              }}
            >

              {data.data.propertyPolicies.map((propertyPolicies) => (

                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 1,
                  alignItems: "flex-start",
                  width: '100%',
                  padding: 0,
                }}>

                  <Box

                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: "flex-start",


                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                      <AccessibilityFeaturesIcons color="primary" fontSize="small" category={propertyPolicies.policies.type} />

                      <span style={{ marginLeft: 8, marginRight: 20 }}>

                        {propertyPolicies.policies.type}


                      </span>
                    </div>

                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',

                      alignItems: "flex-start"
                    }}
                  >

                    <div >
                      {propertyPolicies.policies.description}

                    </div>

                  </Box>

                </div>

              ))}

            </Paper>

          </Box>

        </>
      ) : null}

    </>

  );
}
