import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Welcome from './components/Body/Welcome';
import Greeting from './components/Body/Greeting';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{backgroundColor: '#FFFFFF'}}>
          <Greeting />
        </div>
        <div style={{backgroundColor: '#E5E5E5'}}>
          <Switch>
            <Route path="/" exact component={Welcome}/>
          </Switch>
        </div>
       
        <Footer />
      </div>
  </Router>
  );
}

export default App;
