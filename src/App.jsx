import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import About from './pages/About';
import AuthPage from './pages/AuthPage';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Settings from './pages/Settings';

export default function App() {
  return (
    <UserProvider>
      <div className='box-border flex flex-col bg-base-100 min-h-screen'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </UserProvider>
  );
}
