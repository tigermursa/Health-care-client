import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0,100% 25%, 100% 100%,0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component={"h1"} fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography
          component={"p"}
          fontWeight={400}
          fontSize={18}
          sx={{ mt: 2 }}
        >
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component={"p"} fontWeight={400} fontSize={18}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>

      <Container
        sx={{
          margin: "30px auto",
        }}
      >
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid key={doctor.id} item md={4}>
              <Card sx={{}}>
                <Box>
                  <Image
                    src={doctor.profilePhoto}
                    width={500}
                    height={500}
                    alt=""
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification} {doctor.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={2}>
                    <LocationOnIcon /> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    paddingBottom: "20px",
                  }}
                >
                  <Button>Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              mt: 5,
            }}
          >
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
