import React from "react";
import { Link } from "react-router-dom";

const Main = () => (
  <div>
    <h1>
      This is main page.
      <p>
        <Link to="/abc">Abc</Link>
      </p>
      <p>
        <Link to="/def">Def</Link>
      </p>
    </h1>
  </div>
);

export default Main;
