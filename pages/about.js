import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main className={classes.main}>
        <Typography
          component="h1"
          variant="h2"
          color="textPrimary"
          gutterBottom
        >
          Hi, I am Lusan Das
        </Typography>
        <Typography align="left" paragraph>
          I am a Frontend Engineer with over 5 years of experience building
          amazing products from scratch. I also write about technologies I learn
          from time to time. I started my career in{" "}
          <a href="https://www.ibm.com/in-en" title="IBM">
            IBM
          </a>
          , but soon I realised I wanted to explore the world of startups. Hence
          I joined my first startup FindYogi that changed my career forever.
        </Typography>
        <Typography align="left" paragraph>
          In{" "}
          <a href="https://www.findyogi.com/" title="FindYogi" target="_blank">
            FindYogi
          </a>
          , I got a great mentor who taught me the relevance of writing good
          code and learnt a lot of Javascript along the way. Being in an
          e-commerce startup, my work really pushed me to learn and build
          amazing frontend. Eventually we went on to get aquired by way2online,
          where I played a key role during the aquisition process.
          <br />
          Find More details here{" "}
          <a
            href="https://blog.springrole.com/welcoming-naman-sarawagi-to-our-advisory-board-3fffdf0fc317"
            title="Findyogi Details"
            target="_blank"
          >
            FindYogi aquired by Way2Online.
          </a>
        </Typography>
        <Typography align="left" paragraph>
          Soon after that I went on to join another startup LifeCare Health
          (earlier LifCare), where I was the first engineer. After a year of
          building products from scratch like Desktop and mobile site, CRM,
          Order management tool and many other, we eventually raised a funding
          of 11 million USD. This was a fairytale journey indeed.
          <br />
          Find more details here{" "}
          <a
            href="https://www.thehindubusinessline.com/news/lifcare-raises-11-million-in-series-b-funding/article24505755.ece"
            title="LifCare raises funding"
            target="_blank"
          >
            LifCare raises 11 million USD
          </a>
        </Typography>
        <Typography align="left" paragraph>
          Eventually, I went on to join unicorn e-commerce startup Paytm, where
          I introduced effecient techniques using Redux. I also helped in
          impoving the page load time, by introducing effecient service worker
          strategies and revamped various important pages from scratch creating
          positive impact on millions of users.
          <br />
          Find more details here{" "}
          <a
            href="https://inc42.com/buzz/paytm-mall-gains-unicorn-status-raises-445-mn-funding-from-softbank-alibaba/"
            title="Paytm Mall gains Unicorn status"
            target="_blank"
          >
            Paytm Mall Gains Unicorn Status: Raises $445 Mn Funding From
            SoftBank, Alibaba
          </a>
        </Typography>
        <Typography align="left" paragraph>
          During all these years, I went on to learn a lot of web technologies
          like HTML, CSS, React.js, Redux, Javascript, Webpack, Express.js,
          Node.js, Rxjs, jQuery and various others.
        </Typography>
        <Typography align="left" paragraph>
          Apart from building amazing products, I am also a staff writer for
          freeCodeCamp, LogRocket, Codeburst, Noteworthy and a speaker as well.
          I love giving back to the community the technologies I learn through
          blogs or tech talks using interactive demos.
        </Typography>
      </main>
      <Footer />
    </React.Fragment>
  );
}
