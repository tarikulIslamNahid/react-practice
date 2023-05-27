import './App.css';
import Header from './components/header';
import Footer from './components/Footer'; 

import Home from './pages/Home';
import About from './pages/About';
import EmployeeDetails from './pages/employeeDetails';

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Error from './pages/404';
function App() {

  return (
    <>
     
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        <Route path="/employee/:userId" element={<EmployeeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
        
      {/* <Footer/> */}
      </Router>
      </>
  );
}

export default App;
