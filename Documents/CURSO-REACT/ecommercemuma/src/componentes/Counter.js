import { useState } from "react"

const Counter = () => {
    const [ contador, setContador ] = useState(0)
        const suma = () => {
            setContador( contador + 1)
        }
        const resta = () => {
            setContador (contador - 1)
        }
    return (
        <>
        <h3>Productos en Carrito:</h3>

        <h2> {contador} </h2>

        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <button>Agregar al Carrito</button>
        </>
    );
};

export default Counter