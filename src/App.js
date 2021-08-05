import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Form from './components/ajout_enseignant';
import BasicForms from './components/paiement_form';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="App">
    <Router>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/basicform">
            <BasicForms />
          </Route>
    </Router>
  </div>
  );
}

export default App;
