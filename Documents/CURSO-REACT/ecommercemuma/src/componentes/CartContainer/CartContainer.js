import React from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartContainer = () => {
    const {productCartList, removeItem} = useContext(CartContext)

    return (
        <div>
            CartContainer
            <div>
                {value.productCartList.map(item=>(
                    <>                    
                    <p>{item.name} - {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>eminar</button>
                    </>
                ))}
            </div>

        </div>
)


}