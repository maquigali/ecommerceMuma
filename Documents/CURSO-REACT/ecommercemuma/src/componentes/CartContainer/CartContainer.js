import React, { useState } from "react"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
import './CartContainer.css';



export const CartContainer = () => {
    const {productCartList, removeItem, clear, isInCart, getTotalPrice} = useContext(CartContext)

    const [idOrder, setIdOrder] = useState("");
 

    

    const sendOrder = (event) => {
        event.preventDefault();
       // console.log("orden enviada", event)
        //console.log("nombre", event.target[0].value)
        //console.log("tel", event.target[1].value)
        const order = {

            buyer:{
                name:event.target[0].value,
                phone:event.target[1].value,
                email:event.target[2].value,
            },
            items: productCartList,
            total: getTotalPrice()
        }
        console.log("order", order)

        //crear referencia donde se guardara el doc
        const queryRef = collection(db, "orders");
        //crear el doc
        addDoc(queryRef, order).then(response=>{
            console.log("response", response);
            setIdOrder(response.id)
            clear();
        
        });

    
    }

const updateOrder = () =>{
    //crear referencia
    const queryRef = doc(db, "orders", "4");
    //actualizar doc
    updateDoc(queryRef, {
        buyer: {
            name:"juan",
            phone:"1218721",
            email:"juan@gmail.com",
        },
        items:[
            {
                categoria: "cubos",

            }
        ],

    })
}

    

    return (
        
        <div>
           
            {idOrder && <p className="nombre-item"> Su pedido fue creado! El id es: {idOrder}</p>}
        
            {
            productCartList.length > 0 ?
                    <div >
                    {productCartList.map(item=>(
                        <div className="div-tienda-productos" >                    
                            <p className="nombre-item">{item.name}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio por unidad: $ {item.price}</p>
                            <p className="nombre-item">TOTAL  : $ {item.quantityPrice}</p>                        
                            <button className="boton-eliminar" onClick={()=>removeItem(item.id)}>eliminar</button>
                        
                        </div>
                    
                    
                    ))}

                    <div className="div-boton-vaciar">

                        <button className="boton-tienda" onClick={clear}>Vaciar Carrito</button>
                    </div>
                    
                    <p className="nombre-item">TOTAL : $ {getTotalPrice()}</p>

                    <div className="div-tienda-order">


                        <form onSubmit={sendOrder}>
                            <label>Nombre:</label>
                            <input className="recuadro-style" type="text"/>
                            <label>Tel:</label>
                            <input className="recuadro-style" type="text"/>
                            <label>Mail:</label>
                            <input className="recuadro-style" type="email"/>
                            <div className="div-tienda-order">
                                <button className="boton-enviar" type='submit'>Enviar Pedido!</button>
                            </div>
                        </form>

                    </div>

                </div>
             :
                    <div className="div-tienda-volver">                    
                        <p>Tu carrito esta vacio!</p>
                        <Link className="link-volver" to="/">
                            VER TODOS LOS PRODUCTOS                  
                        </Link>
                    </div>
            }

        
        </div>
    )


}