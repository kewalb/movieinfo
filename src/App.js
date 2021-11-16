import "./App.css";
import Home from "./screens/Home";
import ColorChange from "./screens/Color";
import EditMovie from "./components/EditMovie";
import ErrorPage from "./screens/ErrorPage";
import AddMovie from "./screens/AddMovie";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetail from "./screens/MovieDetail";
import { Paper } from "@mui/material";
import { ThemeProvider , createTheme} from "@material-ui/core/styles";
import CssBaseline from '@mui/material/CssBaseline';
import TicTacToe from "./screens/TicTacToe";


function App() {
  

  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{minHeight: '105vh'}}>
      
        <Router>
          <div>
            <AppBar position="static">
              <Toolbar variant="dense">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <h3 style={{ marginLeft: 30 }}>MovieApp</h3>
                </Link>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <Typography variant="h6" style={{ marginLeft: 30 }}>
                    Home
                  </Typography>
                </Link>
                <Link
                  to="/add-movie"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <Typography variant="h6" style={{ marginLeft: 30 }}>
                    AddMovie
                  </Typography>
                </Link>
                <Link
                  to="/color-game"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <Typography variant="h6" style={{ marginLeft: 30 }}>
                    ColorGame
                  </Typography>
                </Link>
                <Link
                  to="/tic-tac-toe"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <Typography variant="h6" style={{ marginLeft: 30 }}>
                    TicTacToe
                  </Typography>
                </Link>
              </Toolbar>
            </AppBar>
          </div>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/add-movie">
              <AddMovie />
            </Route>
            <Route path="/color-game">
              <ColorChange />
            </Route>
            <Route path="/edit/:id">
              <EditMovie/>
            </Route>

            <Route path="/movie/:id">
              <MovieDetail/>
            </Route>
            <Route path="/tic-tac-toe">
              <TicTacToe/>
            </Route>
            <Route path="**">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </Paper>
   
    </ThemeProvider>
  );
}

export default App;
