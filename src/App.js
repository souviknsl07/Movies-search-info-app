import React,{Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Landing from './Components/Home/Landing';
import Movie from './Components/Home/Movie';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
	      <div>
	        <Navbar/>
	        <Route exact path='/' component={Landing}/>
	        <Route exact path='/movie/:id' component={Movie}/>
	        <Footer/>
	      </div>
      </Router>
    )
  };
}

export default App;
