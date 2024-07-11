// import logo from './logo.svg';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dice from './components/Dice';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dice' element={<Dice/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
