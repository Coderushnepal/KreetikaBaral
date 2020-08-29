import React from "react";
import { Link } from "react-router-dom";

const PoemSummary = ({ poem }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">
          <li>
            <Link to="/poem/:id">
              <b>{poem.title}</b>
            </Link>
          </li>
        </span>
        <br />
        <p>Posted by {poem.postedBy}</p>
        <p className="grey-text">{poem.dateTime}</p>
      </div>
    </div>
  );
};

export default PoemSummary;
