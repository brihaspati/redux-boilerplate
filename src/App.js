// Add below script to package.json to run the jsoon server 
// "start": "json-server --static ./build db.json",

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <Route
              path="/:filter?"
              render={({ match }) => <TodoList filter={match.params.filter} />}
            />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
