import React from 'react';
import {Link} from 'react-router-dom';

const Def = () => (
  <div>
    <h2>Hi, I am Def</h2>
    <Link to="/">Main</Link>
    <p>
      <Link to="/abc">Abc</Link>
    </p>
  </div>
);

export default Def;
