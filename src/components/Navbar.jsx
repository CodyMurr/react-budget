import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import SignUp from './SignUp';

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
