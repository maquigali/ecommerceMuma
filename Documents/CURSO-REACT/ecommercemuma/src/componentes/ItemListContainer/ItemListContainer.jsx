import './style.css';
import data from "./mock-data";
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";




const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams();
    const [item, setItems] = useState([]);
    
         
    //const getData = new Promise((resolve, reject) => {
      //  setTimeout(() => {
        //  resolve(data);
      //}, 2000); 
          
      //})

    useEffect(()=>{    
         
          const queryRef = !categoryId ? collection(db, "productos") : query(collection(db, 
            "productos"),where("categoria","==",categoryId));
          
            
          getDocs(queryRef).then(response=>{
            const resultados = response.docs.map(doc=>{
                const newItem ={
                    id:doc.id,
                    ...doc.data(),

                }
                return newItem
            });
            console.log(resultados)
            setItems(resultados);

          })
          
        
              

        
    },[categoryId])
          
   


    return ( 
        <><div className="greeting">{greeting}</div>
        <div className='grid-items'>
        <ItemList itemList={item} />
        </div></>
        );
    
    
    
};

export default ItemListContainer;