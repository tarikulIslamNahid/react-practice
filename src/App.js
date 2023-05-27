import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Card from './components/Card';
import Movie from './components/Movie';
import movies from './data/movies.json'
import  { useState } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
function App() {
  
 
  return (
    <Router>
    <Layout />
  </Router>
  );
}

export default App;
