import './style.css';
import data from "./mock-data";
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams();

    const [item, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000); 
        
    })

    useEffect (() => {
        getData.then((result) => {
            if(categoryId){
            const newProducts = result.filter(item=>item.categoria === categoryId);
            setItems(newProducts);
            console.log(newProducts);
            } else{
                setItems(result)
            };
        });
       
    }, [categoryId]);


    return ( 
            <><div className="greeting">{greeting}</div>
            <div className='grid-items'>
            <ItemList itemList={item} />
            </div></>
            );
    
    
    
};

export default ItemListContainer;