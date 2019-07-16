import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "row"
  },
  buttoncontainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    width: "30vh"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    flexGrow: 1
  },
  fixedHeight: {
    height: 400 // height of graph
  },
  button: {
    margin: theme.spacing(1)
  },
  papercontainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1
  }
}));
export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {/* container that limit on the sides*/}
            <Container maxWidth="lg" className={classes.buttoncontainer}>
              <Link to="/1">
                <Button variant="outlined" className={classes.button}>
                  Db1
                </Button>
              </Link>
              <Link to="/2">
                <Button variant="outlined" className={classes.button}>
                  Db2
                </Button>
              </Link>
              <Link to="/3">
                <Button variant="outlined" className={classes.button}>
                  Db3
                </Button>
              </Link>
            </Container>
            <Container maxWidth="lg" className={classes.papercontainer}>
              <Route exact path="/1" component={PaperWChart} />
              <Route path="/2" component={PaperWChart} />
              <Route path="/3" component={PaperWChart} />
            </Container>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export function PaperWChart({ match, location }) {
  let params = new URLSearchParams(location.search);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // console.log(window.location.host);

  // fetch("http://" + window.location.host + "/zeserver", {
  //   method: "get"
  // })
  //   .then(data => {
  //     console.log("data received", data);
  //   })
  //   .catch(function(error) {
  //     console.log("Request failed", error);
  //   });
  return (
    <Paper className={fixedHeightPaper}>
      <Chart name2={match.path} name={params.get("name")} />
    </Paper>
  );
}
