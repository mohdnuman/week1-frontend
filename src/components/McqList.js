import React, { Component } from "react";
import { Mcq } from "./index";
import { Container, Row, Col } from "react-bootstrap";

class McqList extends Component {
  shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  render() {
    const mcqs = this.props.mcqs;
    this.shuffle(mcqs);
    return (
      <Container>
        <Row lg={2}>
          <Col className="side-panel" lg={2} xs>
            hello djksvbdsjvbjkdsvjdsbkvbkjdsbj
          </Col>
          <Col id="McqList-wrapper" lg={10}>
            <div className="mcqList">
              {mcqs.length !== 0 && <span id="mcqList-heading">MCQ's</span>}
              {mcqs.map((mcq) => (
                <Mcq mcq={mcq} key={mcq._id} dispatch={this.props.dispatch} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default McqList;
