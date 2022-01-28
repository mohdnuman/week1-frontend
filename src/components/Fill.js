import React, { Component } from "react";

class Fill extends Component {
  render() {
    const fill = this.props.fill;
    return (
      <div className="fill-wrapper">
        <div className="fill-question">
          <span id="question-text">
            {fill.question}
          </span>
        </div>
        {/* <form> */}
          <input type="text" placeholder="Enter the answer..." className="answer-input" />

          <button className="submit-button" onClick={this.handleSubmit}>
            SUBMIT
          </button>
        {/* </form> */}
      </div>
    );
  }
}

export default Fill;
