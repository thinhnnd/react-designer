import React, { Component } from "react";
import Designer from "../../src/Designer";

export default class extends Component {
  state = {
    objects: [
      {
        width: 163,
        height: 84,
        rotate: 0,
        strokeWidth: 0,
        fill: "rgba(0, 123, 255, 1)",
        radius: "0",
        blendMode: "normal",
        type: "rectangle",
        x: 17,
        y: 15,
      },
      {
        width: 70,
        height: 146,
        rotate: 0,
        strokeWidth: 0,
        fill: "rgba(255, 255, 255, 1)",
        radius: "0",
        blendMode: "normal",
        type: "rectangle",
        x: 19,
        y: 109,
      },
    ],
  };

  handleUpdate(objects) {
    this.setState({ objects });
  }

  render() {
    return (
      <Designer
        background={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage:
            "url(https://v-messe.jp/hat/mirai2020chubu/map/img/base_off.png)",
          backgroundColor: "",
          backgroundSize: "2000px",
        }}
        width={2000}
        height={1071}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}
      />
    );
  }
}
