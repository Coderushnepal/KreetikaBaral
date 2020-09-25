import React, { useState, useEffect } from "react";
import "./css/CreatePost.css";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

const EditProfile = () => {
  const history = useHistory();
  const [postCaption, setCaption] = useState("");
  const [postPhoto, setPhoto] = useState("");

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          //   Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          postCaption,
          postPhoto: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.details);
          console.log(data);
          history.push("/");
        });
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", postPhoto);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "kritika");

    fetch("https://api.cloudinary.com/v1_1/kritika/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="create">
        <form>
          <label for="caption">Caption</label>
          <input
            type="text"
            className="caption"
            placeholder="Caption"
            value={postCaption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </form>
        <form>
          <input
            type="file"
            id="myFile"
            className="filename"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          <br />
          <div className="button" onClick={() => postDetails()}>
            Upload
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
