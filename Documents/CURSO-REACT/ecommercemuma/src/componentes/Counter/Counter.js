import { useState } from "react"
import './Counter.css';
import { Link } from "react-router-dom";


const Counter = ({stock, initial, onAdd}) => {
    const [ contador, setContador ] = useState(initial);

    const resta = () => {
        if(contador>1){
            setContador (contador -1)
        }
    }

    
    
    
    const suma = () => {
        if(contador<stock) {
            setContador(contador+1)
        }
    }
    
    
    
    return (
        <div className="contenedor-flex">
            <div className="div-contador">
                <h3>Productos en Carrito:</h3>

                <div className="div-contador-estilo">
                    <button className="boton-sr boton-signos" onClick={resta}>-</button>
                    
                    <h3 className="boton-sr"> {contador} </h3>
                    <button className="boton-sr boton-signos" onClick={suma}>+</button>
                    

                </div>
                <div className="div-boton-agregar">
                                
                <button className="boton-agregar" onClick={()=>onAdd(contador)}>Agregar!</button>

                </div>
                <div>

                {
                contador > 0 && 
                <Link  to="/cart">
                     <button className="boton-agregar">Ir al Carrito </button>
                
                </Link>
                }
                </div>
                
            </div>

            
        </div>
    );
};

export default Counter