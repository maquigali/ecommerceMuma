import { Link } from 'react-router-dom';
import './item.css';




const Item = ({id, name, description, price, image, categoria, stock}) => {
    return ( 
        
                <div className="div-items">
                    <h1>{name}</h1>
                    <img width="90%" src={image}/>
                    <p>{description}</p>
                    <p>{categoria}</p>
                    <p>{id}</p>
                    <p className='precio-item'>${price}</p>
                    <Link to={`/tienda/${id}`}>
                        <button className='boton-detalle'>MÁS INFO</button>
                    </Link>

                    

                </div>);
};

export default Item;