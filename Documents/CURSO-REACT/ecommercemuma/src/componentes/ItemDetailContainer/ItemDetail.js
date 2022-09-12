import Counter from "../Counter/Counter";
import './ItemDetail.css';


export const ItemDetail = ({ item }) => {
    const onAdd = (dato) =>{
        console.log("click", dato)
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


