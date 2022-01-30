import React, { Component } from "react";
import {fetchMcqs} from '../actions/mcqs';
import { fetchFills } from "../actions/fills";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {Home,Navbar} from './index';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMcqs());
    this.props.dispatch(fetchFills());

  }

  render() {
    const mcqs=this.props.mcqs;
    const fills=this.props.fills;
    const marks=this.props.marks;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" render={(props)=>{
              return (<div><Home {...props} mcqs={mcqs} fills={fills} marks={marks} dispatch={this.props.dispatch}/></div>)
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
    fills:state.fills,
    marks:state.marks
  };
}

export default connect(mapstatetoprops)(App);
