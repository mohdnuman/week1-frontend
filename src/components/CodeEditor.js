import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

class CodeEditor extends Component {
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
          }}
        />
        <div className="submit-button-container"><button className="code-submit-button">Submit</button></div>
      </div>
    );
  }
}

export default CodeEditor;
