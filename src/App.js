import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Card />} />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
