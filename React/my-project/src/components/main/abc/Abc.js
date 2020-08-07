import React from 'react';
import {Link} from 'react-router-dom';

const Abc = () => (
  <div>
    <h2>Hi, I am Abc</h2>
    <Link to="/">Main</Link>
    <p>
      <Link to="/def">def</Link>
    </p>
  </div>
);

export default Abc;
