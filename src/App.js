import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home.js";
import {SciFi, Horror, Fantasy, Mystery, Error} from "./Pages";
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/scifi" component={SciFi} />
          <Route exact path="/fantasy" component={Fantasy} />
          <Route exact path="/horror" component={Horror} />
          <Route exact path="/mystery" component={Mystery} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
