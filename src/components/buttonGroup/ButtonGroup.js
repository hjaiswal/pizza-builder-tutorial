import React from "react";

function ButtonGroup(props) {
  const buttonWidth = {
    width: "600px"
  };
  return (
    <div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("tomato");
          }}
        >
          Add/Remove Tomato
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-secondary btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("mushroom");
          }}
        >
          Add/Remove Mushroom
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-warning btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("corn");
          }}
        >
          Add/Remove Corn
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("veggie");
          }}
        >
          Add/Remove Veggie
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
