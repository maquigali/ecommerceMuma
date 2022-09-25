import data from "../ItemListContainer/mock-data";
import { useState, useEffect } from 'react';
import {ItemDetail} from "./ItemDetail";
import { useParams } from "react-router-dom";
import{ db } from "../../utils/firebase";
import {doc, getDoc} from "firebase/firestore";



const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [item, setItem] = useState([]);

    //const getItem = (id) =>{
      //  return new Promise((resolve, reject)=>{
        //    const item = data.find(item=>item.id === parseInt(id));
          //  resolve(item)
        //})
        
    //};

    useEffect (() => {
        const getProducto = async()=>{
            //crear la referencia del produ
            const queryRef = doc(db, "productos",productId);
            //solicitud a firebase
            const response = await getDoc(queryRef);
            console.log(response.data())
            const newItem = {
                id: response.id,
                ...response.data(),
            }
            console.log(newItem);
            setItem(newItem)


            
        }
        getProducto();       
        
       
    }, [productId]);

    console.log('item:',item)

    return (
        <div className="item-detail-container">
            <ItemDetail item={item} />
        </div>
    )
};

export default ItemDetailContainer;