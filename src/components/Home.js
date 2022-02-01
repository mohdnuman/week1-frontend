import React, { Component } from "react";
import { Mcq ,Fill, CodeEditor,Codepanel} from "./index";
import { Row, Col } from "react-bootstrap";

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      activeTab:'mcq',
      time: {}, seconds:2700,
      fininshed:false
    }
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.startTimer();
    this.setState({ time: timeLeftVar });
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

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
      this.setState({fininshed:true});
    }
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
    const marks=this.props.marks;
    const code=this.props.code;
    // this.shuffle(mcqs);
    return (
        <Row lg={2}>
          <Col className="side-panel" lg={2} style={{padding:'0px'}}>
            <div className="test-heading">
              <img src="https://cdn-icons.flaticon.com/png/512/3403/premium/3403504.png?token=exp=1643714716~hmac=bd82e201868c10906bae59c23d080d49" style={{height:'8vh', width:'4vw' ,display:"inline-block" ,margin:'20px'}}/>
            <h3 style={{display:'inline-block', fontWeight:'700'}}>TEST</h3>
            </div>
            <div className="side-option" onClick={this.handleMcq}>MCQs<span className="marks-show">{marks.mcqMarks}/10</span></div>
            <div className="side-option" onClick={this.handleFill}>Fill in the blanks<span className="marks-show">{marks.fillMarks}/10</span></div>
            <div className="side-option" onClick={this.handleCode}>Code<span className="marks-show">{marks.codeMarks}/10</span></div>
            {!this.state.fininshed&&<div className="side-time-option time">Time Left-{this.state.time.m} mins  {this.state.time.s} seconds </div>}
            {this.state.fininshed&&<div className="side-time-option time">Test Finished <span className="score">Score-{marks.mcqMarks+marks.fillMarks+marks.codeMarks}/30</span></div>}


          </Col>
          <Col id="McqList-wrapper" lg={10} style={{padding:'0px'}}>
            {this.state.activeTab==='mcq'&&
            <div className="mcqList">
              <div id="mcqList-heading">MCQ's </div>
              {mcqs.map((mcq) => (
                <Mcq mcq={mcq} key={mcq._id} dispatch={this.props.dispatch} />
              ))}
            </div>
            }
            {this.state.activeTab==='fill'&&
              <div className="fillList">
                <div id="fillList-heading">Fill in the Blanks</div>
                {fills.map((fill) => (
                <Fill fill={fill} key={fill._id} dispatch={this.props.dispatch} />
              ))}
              </div>
            }
            {this.state.activeTab==='code'&&
              <div className="code-editor">
                <div id="fillList-heading">Code</div>
                <Row>
                <Col lg={2} className="code-panel"><Codepanel code={code}/></Col>
                <Col lg={10}><CodeEditor dispatch={this.props.dispatch}/></Col>
                </Row>
              </div>
            }
          </Col>
        </Row>
    );
  }
}

export default Home;
