import React from "react";
// import Beer from "./Beer";

import { Modal } from "../../commons";

class BeerModal extends React.Component {
  render() {
    const { beer, handleClose, show } = this.props;
    const {description } = beer;

    return (
      <Modal show={show} handleClose={handleClose}>
        <div>
          <h2>{description}</h2>
        </div>
      </Modal>
    );
  }
}

export default BeerModal;
