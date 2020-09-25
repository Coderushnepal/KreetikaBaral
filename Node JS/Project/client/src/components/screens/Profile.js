import React, { useState, useEffect, useContext } from "react";
import "./css/profile.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import { UserContext } from "../../App";

const Profile = () => {
  const [mypost, setPost] = useState([]);

  const { state, dispatch } = useContext(UserContext);
  // console.log(state);

  useEffect(() => {
    fetch("/myposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data);
        setPost(result.data);
      });
  });
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <img
              src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="profile"
            />
          </div>

          <div className="profile-user-settings">
            <h1 className="profile-user-name">{state ? state.username : ""}</h1>

            <Link to="/editprofile">
              <button className="btn profile-edit-btn">Edit Profile</button>
            </Link>
            <button
              className="btn profile-settings-btn"
              aria-label="profile settings"
            >
              <i className="fas fa-cog" aria-hidden="true"></i>
            </button>
          </div>

          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">164</span> posts
              </li>
              <li>
                <span className="profile-stat-count">188</span> followers
              </li>
              <li>
                <span className="profile-stat-count">206</span> following
              </li>
            </ul>
          </div>

          <div className="profile-bio">
            <p>
              {/* <span className="profile-real-name">Kritika Baral</span> */}
              <br></br> Lorem ipsum dolor sit, amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="gallery">
            {mypost.map((item) => {
              return (
                <div className="gallery-item" tabindex="0">
                  <img
                    key={item.id}
                    src={item.postPhoto}
                    alt={item.postCaption}
                    className="gallery-image"
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i class="fas fa-heart" aria-hidden="true"></i> 56
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i class="fas fa-comment" aria-hidden="true"></i> 2
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
