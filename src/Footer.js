import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    appBar: {
      top: "auto",
      bottom: 0,
      textAlign:"center"
    },
    footer: {
      display:"flex",
      justifyContent:"center",
    }
  }));
  
  export default function Footer() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar className={classes.footer}>
            <Typography align="center">Copyright @ 2021</Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
