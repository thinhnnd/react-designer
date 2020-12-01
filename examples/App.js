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
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <div className={classes.preview}>
                <MondrianExample />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
