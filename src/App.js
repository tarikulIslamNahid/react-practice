import './App.css';
import Header from './components/header';
import Footer from './components/Footer'; 

import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function App() {

  return (
    <>
     
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
        
      {/* <Footer/> */}
      </Router>
      </>
  );
}

export default App;
