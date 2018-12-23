// let's go!
import React from "react";
import { render } from "react-dom";
import css from "./styles/style.styl";

import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

import { Router, Route, IndexRoute, browserHistorey } from "react-router";

const router = (
  <Router history={browserHistorey}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);

render(router, document.getElementById("root"));
