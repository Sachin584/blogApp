import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, CardMedia } from "@material-ui/core";
import { ThumbUpAlt } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import daman from './images/daman.jpg';
import diu from './images/diu.webp';
import manali from './images/manali.jpg'
import chopta from './images/chopta.jpg'
import leh from './images/leh.jpg'

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: "100%",
    height: "100%",
    padding: "50px",
  },
  media: {
    height: 240
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  blogTitle: {
    marginBottom: "50px",
    marginTop: "10px",
    textAlign: "center",
  },
}));

function Homepage() {
  const classes = useStyles();
  var title = [], desc = [], image1 = [];

  title = useSelector(state => state.blogList)
  desc = useSelector(state => state.blogDesc)
  image1 = useSelector(state => state.blogImage)
  console.log(typeof (image1))

  var choptaDesc = "Chopta is a small region of meadows and evergreen forest area, a part of Kedarnath wildlife sanctuary located in Uttarakhand state,"
  var damanDesc = "Daman is a city in the union territory of Daman and Diu, on India's west coast"
  var lehDesc = "Leh is the joint capital and largest town of the union territory of Ladakh in India."
  var manaliDesc = "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination."
  var diuDesc = "Diu is a coastal town at the eastern end of Diu Island, India. A bridge connects the island to the state of Gujarat."

  var images = [daman, diu, chopta, leh, manali, daman];
  var titles = ["Daman", "Diu", "Chopta", "Leh", "Manali", "daman"];
  var descriptions = [damanDesc, diuDesc, choptaDesc, lehDesc, manaliDesc, damanDesc]

  var excistingData = <Grid container spacing={2}>
    {images.map((image, key) =>

      <Grid item xs={50} sm={12} md={6}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {titles[key]}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {descriptions[key]}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box ml={2}>
              <ThumbUpAlt />
            </Box>
            <Box>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "unset" }}
              >
                <Button variant="outline-dark">view</Button>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Grid>)}
  </Grid>


  var data = <Grid container spacing={2}>
    {title.map((title, key) =>

      <Grid item xs={50} sm={12} md={6}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image1[key]}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {desc[key]}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box ml={2}>
              <ThumbUpAlt />
            </Box>
            <Box>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "unset" }}
              >
                <Button variant="outline-dark">view</Button>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Grid>)}
  </Grid>

  return (
    <div className="App">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Travel experiences
        </Typography>

        <Grid container spacing={2}>
        
          {/* <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image={chopta}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chopta
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Chopta is a small region of meadows and evergreen forest area, a part of Kedarnath wildlife sanctuary located in Uttarakhand state,
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box ml={2}>
                  <ThumbUpAlt />
                </Box>
                <Box>
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    <Button variant="outline-dark">view</Button>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={leh}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Leh
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Leh is the joint capital and largest town of the union territory of Ladakh in India.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box ml={2}>
                  <ThumbUpAlt />
                </Box>
                <Box>
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    <Button variant="outline-dark">view</Button>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image={daman}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Daman
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Daman is a city in the union territory of Daman and Diu, on India's west coast
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box ml={2}>
                  <ThumbUpAlt />
                </Box>
                <Box>
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    <Button variant="outline-dark">view</Button>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image={manali}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Manali
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box ml={2}>
                  <ThumbUpAlt />
                </Box>
                <Box>
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    <Button variant="outline-dark">view</Button>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid> */}

          {excistingData}
          {data}
          <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Link
                    to="/newpost"
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    {" "}
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link
                        to="/newpost"
                        style={{ textDecoration: "none", color: "unset" }}
                      >
                        Wanna share your experience
                      </Link>
                    </Typography>
                  </Link>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default Homepage;
