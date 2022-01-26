import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav 
        className='Nav'>
            
            <h1 style={{color: "dark-gray"}}>
                <Link 
                to='/transactions'>Budget App</Link>
            </h1>

            <button >
                <a
                style={{color: "dark-gray"}}
                href='/transactions/new'>NEW</a>
            </button>
            
        </nav>
    );
};

