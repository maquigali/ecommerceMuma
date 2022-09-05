import './style.css';
import data from "./mock-data";
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000); 
        
    })

    useEffect (() => {
        getData.then((result) => {
            setItems(result);
            console.log(result);
        });
       
    }, []);


    return ( <>
    <ItemList itemList={items} />
    </>
    );
    
    //<div className="greeting">{greeting}</div>;
    
};

export default ItemListContainer;