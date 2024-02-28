import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path ="/signup" element={<SignUp/>} /> 
        <Route path ="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
