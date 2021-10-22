import { Link } from 'react-router-dom'; 

const Navbar = () => {


    return (
        <nav className='navbar'>
            <div className='links'>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contacts</Link>
                
                
                
            </div>
        </nav>
    );
}

export default Navbar; 