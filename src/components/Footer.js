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
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Built with ❤️ by me
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Footer */}
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          I won't run away anymore... I won't go back on my word... that is my
          ninja way!
        </Typography>
        <MadeWithLove />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
