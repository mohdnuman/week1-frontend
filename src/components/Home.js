import React, { Component } from "react";
import { Mcq ,Fill, CodeEditor} from "./index";
import { Row, Col } from "react-bootstrap";

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      activeTab:'mcq'
    }
  }

  handleMcq=()=>{
    this.setState({
      activeTab:'mcq'
    });
  }

  handleFill=()=>{
    this.setState({
      activeTab:'fill'
    });
  }

  handleCode=()=>{
    this.setState({
      activeTab:'code'
    });
  }

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
    const fills=this.props.fills;
    this.shuffle(mcqs);
    return (
        <Row lg={2}>
          <Col className="side-panel" lg={2} style={{padding:'0px'}}>
            <div className="test-heading">
              <img src="https://cdn-icons.flaticon.com/png/512/3403/premium/3403504.png?token=exp=1643365482~hmac=f91a5d5791f31f86260036057226f3ee" style={{height:'8vh', width:'5vw' ,display:"inline-block" ,margin:'20px'}}/>
            <h3 style={{display:'inline-block', fontWeight:'700'}}>TEST</h3>
            </div>
            <div className="side-option" onClick={this.handleMcq}>MCQs</div>
            <div className="side-option" onClick={this.handleFill}>Fill in the blanks</div>
            <div className="side-option" onClick={this.handleCode}>Code</div>

          </Col>
          <Col id="McqList-wrapper" lg={10} style={{padding:'0px'}}>
            {this.state.activeTab==='mcq'&&
            <div className="mcqList">
              {mcqs.length !== 0 && <div id="mcqList-heading">MCQ's</div>}
              {mcqs.map((mcq) => (
                <Mcq mcq={mcq} key={mcq._id} dispatch={this.props.dispatch} />
              ))}
            </div>
            }
            {this.state.activeTab==='fill'&&
              <div className="fillList">
                {fills.length !== 0 && <div id="fillList-heading">Fill in the Blanks</div>}
                {fills.map((fill) => (
                <Fill fill={fill} key={fill._id} dispatch={this.props.dispatch} />
              ))}
              </div>
            }
            {this.state.activeTab==='code'&&
              <div className="code-editor">
                <CodeEditor/>
              </div>
            }
          </Col>
        </Row>
    );
  }
}

export default Home;
