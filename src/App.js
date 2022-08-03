import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Jerky from './Jerky';
import Twizzlers from './Twizzlers';
import Cheetos from './Cheetos';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<VendingMachine/>} />
          <Route exact path='/jerky' element={<Jerky/>} />
          <Route exact path='/twizzlers' element={<Twizzlers/>} />
          <Route exact path='/cheetos' element={<Cheetos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
