import React from "react";

import {
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    border: "2px solid white",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      border: "2px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "unset" }}
          >
            What a Trip
          </Link>
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" style={{ textDecoration: "none", color: "unset" }}>
            <Button className={classes.link}>All Posts</Button>
          </Link>

          <Link
            to="/newpost"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <Button className={classes.link}>create blog</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
