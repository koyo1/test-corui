import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Form from './components/comp_ajout_enseignant/ajout_enseignant';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="App">
    <Router>
          <Route path="/form">
            <Form />
          </Route>
    </Router>
  </div>
  );
}

export default App;
