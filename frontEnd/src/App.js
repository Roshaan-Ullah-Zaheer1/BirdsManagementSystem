import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import CreateBird from "./components/bird/CreateBird";
import AllBirds from "./components/bird/AllBirds";
import ViewSingleBird from "./components/bird/ViewSingleBird";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import cssFilesLoader from "./CssFilesLoader"
import logo from "./logo.png";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {toggle: false};
  }

  handleToggle(){
    this.setState({toggle: !this.state.toggle});
  }


  render() {
    return (
      <Router>
        <cssFilesLoader>
        <div className={this.state.toggle === true ? 'hold-transition sidebar-mini sidebar-collapse' :
        'hold-transition sidebar-mini'}>
            <div className="wrapper">
              <Navigation toggleHandler={this.handleToggle}/>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/edit/:id" element={<EditTodo />} /> */}
                <Route path="/birds/create" element={<CreateBird />} />
                <Route path="/birds" element={<AllBirds />} />
                <Route path="/view/single/bird" element={<ViewSingleBird/>} />
              </Routes>
            </div>
          </div>
        </cssFilesLoader>
      </Router>
    );
  }
}

export default App;