import React from "react";
import Notifications from "./Notifications";
import PoemList from "../poems/PoemList";
import { connect } from "react-redux";
import Navbar from "../layout/Navbar";

class Dashboard extends React.Component {
  render() {
    // console.log(this.props);
    const { dummyPoems } = this.props; //yeslai comment garera  (yo destructure gareko ho) ani tala this.props.dummyPoems lekhda hunchha
    return (
      <div>
        <Navbar />
        <div className="dashboard container">
          <div className="row">
            <div className="col s6">
              <PoemList poems={dummyPoems} />
            </div>
            <div className="col s12 m6">
              <PoemList poems={dummyPoems} />
              {/* <Notifications /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dummyPoems: state.poem.poems,
  };
};

export default connect(mapStateToProps)(Dashboard);
