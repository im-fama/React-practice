import UserCard from './components/UserCard';
import UserList from './components/UserList';
import Button from './components/Button';
import FavoriteColor from './components/FavoriteColor';
import Counter from './components/Counter';
import Controls from './components/Controls';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
  
const btnProps = { label: 'Submit', variant: 'primary' };

function App() {
  const [count, setCount] = useState(0);
  
  const handleSubmit = () => {
    alert('Submit button clicked');
  };

  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  
    /*
    <div>
      <UserCard
        name="Fatima"
        role="Developer"
        isOnline={true}
      />
      <UserList/>
      <Button {...btnProps} onClick={handleSubmit} />
      <FavoriteColor />
    </div>
    <div style={{ textAlign: "center" }}>
      <h1>Counter App</h1>

      <Counter count={count} />
      <Controls setCount={setCount} count={count} />

    </div>
    */

  );
}

export default App;

