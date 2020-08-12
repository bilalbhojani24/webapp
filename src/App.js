import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Menu from './Menu';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Menu />
     <Switch>
       <Route exact path='/' activeClass="active_link" component={Home} />
       <Route exact path='/about' activeClass="active_link" component={About} />
       <Route exact path='/service' activeClass="active_link" component={Service} />
       <Route exact path='/contact' activeClass="active_link" component={Contact} />
       <Redirect to='/'/>
     </Switch>
    </>
  );
}

export default App;
