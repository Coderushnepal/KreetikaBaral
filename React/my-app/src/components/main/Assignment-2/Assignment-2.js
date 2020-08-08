import React from "react";
import { Link } from "react-router-dom";
import EnhancedUser from "./user";


function App() {
  const people = ["Kirtee", "Neeta", "Sindhu", "Bisikha","Rachana"];
  return (
    <div className="App">
      <div className="userList">
        <h1>Assignment 2</h1>
        {people.map((name, index) => (
          <EnhancedUser key={name} name={name} />
        ))}
      </div><br/>
      <Link to="/">Assignment 1</Link>
    </div>
  );
}

export default App;







// const Assignment2 = () => (
//   <div>
//     <h2>Hi, I am Assignment 2</h2>
//     <Link to="/">Assignment 1</Link>
//   </div>
// );

// export default Assignment2;
