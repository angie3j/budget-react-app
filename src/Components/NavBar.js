import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='Nav'>
            
            <h1>
                <Link 
                className='BudgetApp'
                to='/transactions'>Budget App</Link>
            </h1>

            <button>
                <a
                className='NewButton' 
                href='/transactions/new'>NEW</a>
            </button>
            
        </nav>
    );
};

