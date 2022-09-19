
import { useState, useContext } from "react";
import Counter from "../Counter/Counter";
import './ItemDetail.css';
import { CartContext } from "../context/CartContext";


export const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);
    

    const onAdd = (dato) =>{
        console.log("click", dato);
        addItem(item, dato)
    }
    
    return (
            <div className='detail-container'>
                <h1>{item.name}</h1>
                <img width="80%" src={item.image} alt={item.title}></img>
                <h2 className="detail-fuentes">PRECIO:${item.price}</h2>
                <p className="detail-fuentes">DETALLE: {item.description}</p>
                <Counter stock={item.stock} initial={1} onAdd={onAdd}/>
                
            </div>
    );
};


