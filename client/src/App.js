import React, { useState } from "react";  //panel
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//import { BrowserRouter as Router, Switch} from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Schedule from "./components/Schedule/Schedule";
import Appointment from "./components/Appointment/Appointment";
import About from "./components/About/About";
import Medicines from "./components/Medicines/Medicines";
import Diagnostics from "./components/Diagnostics/Diagnostics";
import HealthArticles from "./components/HealthArticles/HealthArticles";
import { StoreProvider } from "./utils/GlobalState";


import "./App.css";
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"> </link>

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  const commands = [
    {
      command: ["go to * page", "go to *", "open * page", "open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = [
    "home",
    "login",
    "about",
    "health",
    "diagnostics",
    "medicines",
    "sign",
    "appointment",
    "schedule",
  ];
  const urls = {
    home: "/",
    login: "/login",
    about: "/About",
    health:"/HealthArticles",
    diagnostics: "/Diagnostics",
    medicines: "/Medicines",
    sign: "/Signup",
    appointment: "/Appointment",
    schedule: "/Schedule",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg">
          
          <StoreProvider>
            <ChakraProvider>
              <Nav />
              {/*Layout for the app using Chakra-UI */}
              <Grid
                h="85vh"
                templateRows="repeat(9, 1fr)"
                templateColumns="repeat(7, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={9} colSpan={1} bg="transparent" />
                <GridItem rowSpan={1} colSpan={5} bg="transparent" />
                <GridItem rowSpan={9} colSpan={1} bg="transparent" />
                <GridItem rowSpan={7} colSpan={5} bg="transparent">
                  <GridItem rowSpan={1} colSpan={5} bg="transparent" />
                  <GridItem rowSpan={9} colSpan={5} bg="transparent" />
                  <GridItem rowSpan={7} colSpan={1} bg="transparent" />
                  <GridItem rowSpan={9} colSpan={5} bg="transparent" />

                  <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/schedule" component={Schedule} />
                    <Route exact path="/Appointment" component={Appointment} />
                    <Route exact path="/Medicines" component={Medicines} />
                    <Route exact path="/Diagnostics" component={Diagnostics} />
                    <Route exact path="/About" component={About} />
                    <Route
                      exact
                      path="/HealthArticles"
                      component={HealthArticles}
                    />

                    {redirect}
                  </BrowserRouter>
                  <div className="Voice">
                    <p id="Transcript"><b>Transcript:{transcript}</b></p>
                    <button onClick={SpeechRecognition.startListening}>
                      <b>Start</b>
                    </button>
                  </div>
                </GridItem>
                <GridItem rowSpan={9} colSpan={5} bg="transparent" />
              </Grid>

              {/*Layout for the app using Chakra-UI */}
            </ChakraProvider>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
