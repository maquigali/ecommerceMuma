import React from "react"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export const CartContainer = () => {
    const {productCartList, removeItem, clear, isInCart, getTotalPrice} = useContext(CartContext)

    

    return (
        
        <div>
            {
            productCartList.length > 0 ?
                    <div>
                    {productCartList.map(item=>(
                        <div>                    
                        <p>{item.name}</p>
                        <p>
                        CANTIDAD: {item.quantity}</p>
                        <p>PRECIO UNIDAD: $ {item.price}</p>
                        <p>TOTAL: {item.quantityPrice}</p>                        
                        <button onClick={()=>removeItem(item.id)}>eliminar</button>
                        
                        </div>
                    
                    
                    ))}
                    <button onClick={clear}>Vaciar</button>
                    <button onClick={()=>isInCart()}>validacion</button>
                    <p>TOTAL: {getTotalPrice()}</p>




                </div>
             :
                    <div>
                    
                    <p>Tu carrito esta vacio!</p>
                    <Link to="/">
                        VER TODOS LOS PRODUCTOS                  
                    </Link>
                    </div>
            }

        
        </div>
    )


}