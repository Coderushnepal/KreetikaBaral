import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { counterActions } from "../../actions";

const Counter = ({ count, actions }) => (
  <div>
    <p>
      Counter {count}
      <button
        style={{
          position: "relative",
          clear: "both",
          padding: "10px",
          margin: "10px",
        }}
        onClick={actions.increaseCount}
      >
        +
      </button>
      <button
        style={{
          position: "relative",
          clear: "both",
          padding: "10px",
          margin: "10px",
        }}
        onClick={actions.decreaseCount}
      >
        -
      </button>
    </p>
  </div>
);

const mapStateToProps = ({ counterReducer: { count } }) => {
  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...counterActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
