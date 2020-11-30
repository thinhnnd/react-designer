import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { Rect, Vector, Text } from "../src/objects";
import classes from "./App.module";

import MondrianExample from "./components/Mondrian";
import MalevichExample from "./components/Malevich";
import SwissStyleExample from "./components/SwissStyle";
import MockupDesignerExample from "./components/MockupDesigner";
import TshirtDesignerExample from "./components/TshirtDesigner";

export default class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Mondrian</h3>
            <p>
              Default configuration with initial rectangle objects set on the
              internal state of container component.
            </p>
            <p>Enabled all default drawing tool set and panels.</p>
            <p>
              <a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/Mondrian.js">
                Show example on github
              </a>
            </p>
          </div>
          <div className={classes.preview}>
            <MondrianExample />
          </div>
        </div>
      </div>
    );
  }
}
