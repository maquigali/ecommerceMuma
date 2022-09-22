import logo from './logosolomuma.png';
import logoinsta from './Instagramlogo.png';
import logoface from './FBlogo.png';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link , NavLink} from 'react-router-dom';



const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='div-logos-bar'>
                <Link to="/">
                    <img className='logo-muma' width={'100px'} src={logo} alt="logo" />                
                </Link>    
                <a className='logos-redes' href="https://www.instagram.com/rincon.muma" target="blank">
                    <img width={'20px'} src={logoinsta} alt="logoinsta" />                
                </a>    
                <a className='logos-redes' href="https://www.facebook.com/rinconmuma-102346304957383" target="blank">
                    <img width={'20px'} src={logoface} alt="logoface" />                
                </a>              
            </div>
            
            <div className='div-barra-menu'>
                <ul className='barra-menu'>                  
                    
                    <NavLink className={({isActive})=> isActive ? "pgactiva" : "pginactiva"} to="/quienessomos">QUIENES SOMOS</NavLink>                                     
                    <NavLink className={({isActive})=> isActive ? "pgactiva" : "pginactiva"} to="/contacto">CONTACTO</NavLink>
                    <NavLink className={({isActive})=> isActive ? "pgactiva" : "pginactiva"} to="/faqs">FAQs</NavLink>
                     <NavLink className={({isActive})=> isActive ? "pgactiva" : "pginactiva"} to="/">TIENDA</NavLink>
                        <NavLink className= {({isActive})=> isActive ? "submenuactiva" : "submenuinactiva"} to="/arcoiris">ARCOIRIS WALDORF</NavLink>
                        <NavLink className={({isActive})=> isActive ? "submenuactiva" : "submenuinactiva"} to="/babitas">BABITAS</NavLink>
                        <NavLink className= {({isActive})=> isActive ? "submenuactiva" : "submenuinactiva"} to="/conejos">CONEJITOS DE APEGO</NavLink>
                        <NavLink className={({isActive})=> isActive ? "submenuactiva" : "submenuinactiva"} to="/cubos">CUBOS SENSORIALES</NavLink>
                        <NavLink className= {({isActive})=> isActive ? "submenuactiva" : "submenuinactiva"} to="/mordillos">MORDILLOS</NavLink>
                        <NavLink className={({isActive})=> isActive ? "submenuactiva" : "submenuinactiva"} to="/pelotas">PELOTAS MONTESSORI</NavLink>
                        
                </ul>
            </div>
            <div>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
             </div>
            <div>
                <button>LOG IN</button>
            </div>

        </div>
    );
};

export default NavBar;