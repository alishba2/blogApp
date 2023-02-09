import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from './author'
import Navbar from './navbar';
import Home from './home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
          <Route path='/'  element={<Home />} />    
          <Route path='/author'  element={<Author />} /> 
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
