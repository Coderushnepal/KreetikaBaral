import React, { useState, useEffect } from "react";
import "./css/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/myposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setData(result.data);
      });
  }, []);

  const likePost = (id) => {
    fetch("/likes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const deletePost = (postId) => {
    fetch(`/delete/${postId}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((item) => {
          return item.id !== result.id;
        });
        setData(newData);
      });
  };

  return (
    <div>
      <Navbar />

      <main id="feed">
        {data.map((item) => {
          return (
            <div className="photo" key={item.username}>
              <header className="photo__header">
                <img
                  src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                  class="photo__avatar"
                />
                <div className="photo__user-info">
                  <span className="photo__author">{item.postedBy}</span>
                  {/* <span className="photo__location">Kathmandu</span> */}
                </div>
              </header>
              <img src={item.postPhoto} />
              <div className="photo__info">
                <div className="photo__actions">
                  <span className="photo__action">
                    <i
                      className="fa fa-heart-o fa-lg"
                      onClick={() => {
                        likePost(item.id);
                      }}
                    ></i>
                  </span>
                  <span className="photo__action">
                    <i className="fa fa-comment-o fa-lg"></i>
                  </span>
                </div>
                <span className="photo__likes">
                  {[item.postLikes].length} likes
                </span>

                <ul className="photo__comments">
                  <li className="photo__comment">{item.postCaption}</li>
                  <li className="photo__comment">
                    <span className="photo__comment-author">Rachana</span> Wow!
                  </li>
                  <li className="photo__comment">
                    <span className="photo__comment-author">Kirtee</span>{" "}
                    Niceeeeeeeee!
                  </li>
                </ul>
                <span className="photo__time-ago">2 hours ago</span>
                <div className="photo__add-comment-container">
                  <textarea
                    name="comment"
                    placeholder="Add a comment..."
                  ></textarea>
                  <span>
                    {/* {item.postedBy.id == state.id && ( */}
                    <i
                      className="far fa-trash-alt"
                      onClick={() => deletePost(item.id)}
                    ></i>
                    {/* )} */}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <footer className="footer">
        <div className="footer__column">
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Support
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Press
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Api
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Jobs
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Directory
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Language
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__column">
          <span className="footer__copyright">© 2020 Instagram</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
