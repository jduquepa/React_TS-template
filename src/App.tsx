import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import  home   from './Features/Home/home'
import  counter   from './Features/Counter/counter'
import  login   from './Features/Login/login'

function App() {
  return (
    <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/counter">counter</Link>
            <Link to="/login">Login</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/counter" component={counter} />
            <Route exact path="/login" component={login} />
          </Switch>
        </div>
      </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
