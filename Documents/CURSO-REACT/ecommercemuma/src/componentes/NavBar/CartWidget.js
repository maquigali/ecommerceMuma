import logoCart from './carritologo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext);

    return (
        <div>
            
                <img width={'50px'} src={logoCart} alt="logo" />
                <span>2</span>
            
        </div>
           
       
        
    );
};

export default CartWidget;