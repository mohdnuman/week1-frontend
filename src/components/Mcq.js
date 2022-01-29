import React, { Component } from "react";
import { addMcqMarks } from "../actions/marks";

class Mcq extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedOption:'',
      message:'',
      answered:false
    }
  }
 
  onValueChange=(event)=> {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit=(event)=> {
    event.preventDefault();
    console.log(this.state.selectedOption);
    if(this.props.mcq.answer===this.state.selectedOption){
      this.props.dispatch(addMcqMarks())
      this.setState({
        message:'correct',
        answered:true
      })
    }
    else{
      this.setState({
        message:'wrong',
        answered:true
      })
    }
  }
  render() {
    const mcq = this.props.mcq;
    
    return (
      <div className="mcq-wrapper">
        <div className="mcq-question">
          <span>
            <span id="question-text">Question-</span>
            <span className="question-wrapper">{mcq.question}</span>
          </span>
        </div>
        <form onSubmit={this.formSubmit}>
          {mcq.options.map((option) => (
            <div className="mcq-option">
              <input
                type="radio"
                name="option1"
                value={option}
                checked={this.state.selectedOption === option}
                onChange={this.onValueChange}
              />
              {option}
            </div>
          ))}
          {!this.state.answered && <button className="submit-button" onClick={this.handleSubmit}>
            SUBMIT
          </button>}
          {this.state.message === "correct" && <span className="correct-text">Correct answer{' '}<img src="https://cdn-icons.flaticon.com/png/512/1634/premium/1634264.png?token=exp=1643375648~hmac=910ac7de000935fa9ce4f42cc9bbef75" className="tick"/> </span>}
        {this.state.message === "wrong" && <span className="wrong-text">Wrong answer{' '}<img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" className="cross"/>  </span>}

        </form>
      </div>
    );
  }
}

export default Mcq;
