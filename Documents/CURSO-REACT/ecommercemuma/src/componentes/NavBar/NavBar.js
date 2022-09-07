import logo from './logosolomuma.png';
import logoinsta from './Instagramlogo.png';
import logoface from './FBlogo.png';

import './NavBar.css';
import CartWidget from './CartWidget';
import { Link , NavLink} from 'react-router-dom';



const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <Link to="/">
                    <img width={'100px'} src={logo} alt="logo" />                
                </Link>                
            </div>
            <div>
                <a href="https://www.instagram.com/rincon.muma" target="blank">
                    <img width={'30px'} src={logoinsta} alt="logoinsta" />                
                </a>    
                <a href="https://www.facebook.com/rinconmuma-102346304957383" target="blank">
                    <img width={'30px'} src={logoface} alt="logoface" />                
                </a>               
            </div>
            <div >
                <ul className='barra-menu'>
                    <NavLink className={({isActive})=> isActive ? "pgactiva" : "pginactiva"} to="/">Inicio</NavLink>
                                     
                    <NavLink className={({isActive})=> isActive ? "pgactiva" : "pginactiva"} to="/contacto">CONTACTO</NavLink>

                </ul>
            </div>
            <div>
                <CartWidget/>
             </div>
            <div>
                <button>LOG IN</button>
            </div>

        </div>
    );
};

export default NavBar;