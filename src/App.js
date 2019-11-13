import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts.js';
import Header from './components/layout/Header.js';
import AddContacts from './components/contacts/AddContacts';
import EditContacts from './components/contacts/EditContacts';
import Test from './components/test/Test';
import {Provider} from './context.js';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
  	<Provider>
    <Router>
    <div className="App">
      <Header title = "Conact Manager!" />
      
      <div className="container">
      <Switch>
      <Route exact path="/" component ={Contacts}>
      </Route>
      <Route exact path="/contacts/add" component ={AddContacts}>
      </Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contacts/edit/:id" component={EditContacts}></Route>
      <Route exact path="/test" component={Test}></Route>
      <Route component={NotFound}></Route>
      
      </Switch>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
