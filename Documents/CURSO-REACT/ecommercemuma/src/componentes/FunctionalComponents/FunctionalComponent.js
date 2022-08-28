
import './styles.css';

const FunctionalComponent = ({producto, precio}) => {
    console.log(producto, precio);
    
    return (
        <div>
            <h1>{producto}</h1>
        </div>
    );
};

export default FunctionalComponent;

