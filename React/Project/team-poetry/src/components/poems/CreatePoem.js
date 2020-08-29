import React, { Component } from "react";
import { connect } from "react-redux";
import { createPoem } from "../../store/actions/poemActions";
import Navbar from "../layout/NewPoemNavbar";

class CreatePoem extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Drop Your Poems Here !!</h5>
            <br />
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content">Your Poem</label>
              <textarea
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="input-field">
              <button className="btn teal darken-1 z-depth-0">
                Upload Poem
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPoem: (poem) => dispatch(createPoem(poem)),
  };
};

export default connect(mapDispatchToProps)(CreatePoem);
