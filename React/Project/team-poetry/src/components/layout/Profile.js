import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="container section profile">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Profile</span>
            <span>
              Name: Kritika Baral
              <br />
              Email: Kritika.baral@gmail.com
            </span>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            {/* <div>Posted by Kritika Baral</div>
          <div>25th August, 6:00pm</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
