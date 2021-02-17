import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Photo from './pages/Photo';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/photography" exact component={Photography} />
          <Route path="/photography/:id" component={Photo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
