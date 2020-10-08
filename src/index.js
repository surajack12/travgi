import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Kyc from './component/kycform'
import Navbar from './component/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './component/profile'
import {BrowserRouter as Router,Route } from 'react-router-dom'

const router =(
  <Router>
    <div >
      
      <Route exact path='/' component ={App}/>
      <Route path='/services' component ={App}/>
      <Route path='/profile' component ={Profile}/>
      <Route path='/inbox' component ={App}/>
      <Route path='/support' component ={App}/>
      <Route path='/nearby' component ={App}/>
      <Route path='/support' component ={App}/>
      <Route path='/jobs' component ={App}/>
      <Route path='/setting' component ={App}/>
      <Route path='/contactus' component ={App}/>
      <Route path='/kyc' component ={Kyc}/>
      
    </div>
  </Router>
)

ReactDOM.render(router,
  document.getElementById('root'));


