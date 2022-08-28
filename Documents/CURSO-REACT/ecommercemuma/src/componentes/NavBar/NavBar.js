import logo from './logosolomuma.png';
import './NavBar.css';
import CartWidget from './CartWidget';



const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'100px'} src={logo} alt="logo" />
            </div>
            <div >
                <ul className='barra-menu'>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>ABOUT US</a></li>
                    <li><a href='#'>CONTACTO</a></li>

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