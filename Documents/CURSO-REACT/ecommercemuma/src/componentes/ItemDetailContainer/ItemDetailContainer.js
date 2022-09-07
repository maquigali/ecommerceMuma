import data from "../ItemListContainer/mock-data";
import { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000); 
        
    })

    useEffect (() => {
        getItem.then((result) => {
            setItem(result);
            console.log(result);
        });
       
    }, []);

    return (<>

    <ItemDetail produDetalles={item} />
    
    </>);
};

export default ItemDetailContainer;