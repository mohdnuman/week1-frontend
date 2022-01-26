import React, { Component } from "react";

class Mcq extends Component {
    shuffle =(array)=>{
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
  render() {
    const mcq = this.props.mcq;
    this.shuffle(mcq.options)
    return (
      <div className="mcq-wrapper">
        <div className="mcq-question">
          <span className="user-name"><span id="question-text">Question-</span>{mcq.question}</span>
        </div>
        <form>
          {mcq.options.map((option) => (
            <div className="mcq-option"><input type="radio" name="option1" value={option} />{option}</div>
          ))}
        </form>
        
        <button className="mcq-button" onClick={this.handleSubmit}>
          SUBMIT
        </button>
        
      </div>
    );
  }
}

export default Mcq;
