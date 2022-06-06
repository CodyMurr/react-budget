import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import About from './pages/About';
import AuthPage from './pages/AuthPage';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/auth' element={<AuthPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
