import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { executeCode } from "../actions/code";

class CodeEditor extends Component {
  constructor(props){
    super(props);
    this.state={
      script:'',
      clientId:'a8d88af157f47d83f283df8e1446f5e4',
      clientSecret:'c5e6a13d17605f25a0abdaa7f49b5478975b0a2a40ea3f2fcb8bdabc93303d9f',
      stdin:'StdIn',
      language:'cpp',
      versionIndex:0

    }
  }
  handleSubmit=()=>{
    this.props.dispatch(executeCode(this.state));
  }
  render() {
    return (
      <div>
        {/* <textarea  className='editor'/> */}
        <CodeMirror
          className="editor"
          value="console.log('hello world!');"
          height="84vh"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log("value:", value);
            this.setState({script:value});
          }}
        />
        <div className="submit-button-container"><button className="code-submit-button" onClick={this.handleSubmit}>Submit</button></div>
      </div>
    );
  }
}

export default CodeEditor;
