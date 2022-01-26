import React, { Component } from "react";
import {fetchMcqs} from '../actions/mcqs';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {McqList,Navbar} from './index';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMcqs());
  }

  render() {
    const mcqs=this.props.mcqs;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" render={(props)=>{
              return (<div><McqList {...props} mcqs={mcqs}/></div>)
            }}/>

          </Switch>

          
        </div>
      </Router>
    );
  }
}
function mapstatetoprops(state) {
  return {
    mcqs: state.mcqs,
  };
}

export default connect(mapstatetoprops)(App);
