import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../Link";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    background: "#fff"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative" color="#fff" style={{ boxShadow: "none" }}>
      <Toolbar>
        {/* <CameraIcon className={classes.icon} /> */}
        <Link href="/">
          <Button>Lusan Das</Button>
        </Link>
        <Link href="/projects">
          <Button>Projects</Button>
        </Link>
        <Link href="/about">
          <Button>About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
