import React, { Component } from "react";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import CreateBird from "./components/create.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import logo from "./logo.png";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Zaba Birds Farm</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/bird/create" className="nav-link">Add Bird</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
          <Route path="/" element={<TodosList/>} />
          <Route path="/edit/:id" element={<EditTodo/>} />
          <Route path="/create" element={<CreateTodo/>} />
          <Route path="/bird/create" element={<CreateBird/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;