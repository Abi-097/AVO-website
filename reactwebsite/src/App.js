import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import react from 'react'
function App() {
  return (
 <>
 <Router>
 <Navbar/>
 <Home/>
 </Router>


 </>
     

  );
}

export default App;
