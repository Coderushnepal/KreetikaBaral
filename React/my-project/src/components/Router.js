import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Main from "./main";
import MainRouter from "./main";
import Fourohfour from "./fourohfour/Fourohfour";

// const Abc = () => (
//   <div>
//     <h2>Hi, I am Abc</h2>
//     <Link to="/">Main</Link>
//     <p>
//       <Link to="/def">def</Link>
//     </p>
//   </div>
// );
// const Def = () => (
//   <div>
//     <h2>Hi, I am def</h2>
//     <Link to="/">Main</Link>
//     <p>
//       <Link to="/abc">Abc</Link>
//     </p>
//   </div>
// );

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/abc" component={Abc} />
      <Route exact path="/def" component={Def} /> */}
      <Route path="/" component={Main} />
      <MainRouter />
      <Route path="*" component={Fourohfour} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
