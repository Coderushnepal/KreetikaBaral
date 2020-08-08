import React from "react";
import { Link } from "react-router-dom";
import Counter from "./counter/counter";
import NameList from "./nameList/name";
import "./nameList/name.css";


function Main() {
  const names = [
    "Neeta Sapkota",
    "Neha Shiwakoti",
    "Srijana Khatiwada",
    "Sami Chakradhar",
    "Kirtee Maharjan",
    "Trija Thebe",
    "Sindhu Aryal",
    "Kusum Ranjitkar",
    "Elisha Bista",
    "Rachana Kafle",
    "Barsha Maharjan",
    "Pooja Gurung",
    "Bisikha Subedi",
    "Kritika Baral",
    "Srijana Thulung",
  ];

  return (
    <div className="list">
      <h1>Assignment 1</h1>
      <h2>Counter</h2>
      <Counter />
      <div className="nameList">
        <br></br>
        <h2>List of names</h2>
        {names.map((name, index) => (
          <NameList key={name.split("").concat(index)} name={name} />
        ))}
      </div>
      <div>
        <p>
          <Link to="/assignment2">Assignment 2</Link>
        </p>
      </div>
    </div>
  );
}

export default Main;
