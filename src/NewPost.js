import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TextField, Paper, Button, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import { addBlog } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  blogTitle: {
    marginBottom: "50px",
    marginTop: "10px",
    textAlign: "center",
  },
}));


function NewPost() {

  const [title, setTitle] = useState([]);
  const [description, setDesc] = useState([]);
  const [image, setImage] = useState(null);

  const onChangeTitle = (event) => {
    setTitle([event.target.value]);
  }

  const onChangeDesc = (event) => {
    setDesc([event.target.value]);
  }

  const handleImage = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
      // console.log(event.target.files[0]);
    }
  }

  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        New Posts
      </Typography>
      <div style={{ padding: 30 }}>
        <Paper>
          <Grid
            container
            spacing={4}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <TextField label="enter the title" onChange={onChangeTitle}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="enter the content" onChange={onChangeDesc}></TextField>
            </Grid>

            <Button
              variant="contained"
              component="label"
            >
              post Image
              <input onChange={handleImage}
                type="file"
                hidden
              />
            </Button>


            <Grid item xs={12}>
              <Link to="/" style={{ textDecoration: "none", color: "unset" }}>

                <Button fullWidth onClick={() => dispatch(addBlog(title, description, image))}> Post </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </div>

    </Container>
  );
}
export default NewPost;
