import React, { Component } from "react";
import "./Pizza.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Tomato from "../tomato/Tomato";
import Mushroom from "../mushroom/Mushroom";
import Corn from "../corn/Corn";
import Veggie from "../veggie/Veggie";
import ButtonGroup from "../buttonGroup/ButtonGroup";
import CustomChatbot from "../chatbot/CustomChatbot";

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tomato: false,
      mushroom: false,
      veggie: false,
      corn: false
    };
  }

  clickEventHandler = ingredient => {
    if (ingredient === "tomato") {
      this.setState({
        tomato: !this.state.tomato
      });
    } else if (ingredient === "mushroom") {
      this.setState({
        mushroom: !this.state.mushroom
      });
    } else if (ingredient === "corn") {
      this.setState({
        corn: !this.state.corn
      });
    } else {
      this.setState({
        veggie: !this.state.veggie
      });
    }
  };

  render() {
    const tomato = this.state.tomato && <Tomato />;
    const mushroom = this.state.mushroom && <Mushroom />;
    const corn = this.state.corn && <Corn />;
    const veggie = this.state.veggie && <Veggie />;

    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {tomato}
              {mushroom}
              {corn}
              {veggie}
            </div>
          </div>
          <ButtonGroup eventHandler={this.clickEventHandler} />
          <CustomChatbot eventHandler={this.clickEventHandler} />
        </div>
      </div>
    );
  }
}

export default Pizza;
