import React, { useState } from "react"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 


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
            <button onClick={updateOrder}>actualizar orden</button>
            {idOrder && <p>su orden fue creada, id {idOrder}</p>}
        
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


                    <form onSubmit={sendOrder}>
                        <label>Nombre:</label>
                        <input type="text"/>
                        <label>Tel:</label>
                        <input type="text"/>
                        <label>Mail:</label>
                        <input type="email"/>
                        <button type='submit'>Enviar orden</button>
                    </form>

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