import { Link, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';

function Home() {
  return (
    <main className="landing">
      <div className="landing-content">
        <p className="eyebrow">GROW YOUR HAPPY PLACE</p>
        <h1>Paradise Nursery</h1>
        <p>Bring the beauty of nature into your home with our carefully selected houseplants.</p>
        <Link className="primary-button" to="/plants">Get Started</Link>
      </div>
      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}