import fotoarcoiris from '../Fotos/arcoiris.jpg'

const ItemDetail = ({ produDetalles}) => {
    
    return <div>
        <h1>ARCOIRIS WALDORF</h1>
        <img src={fotoarcoiris} alt="fotoarcoiris"></img>
        <h2>$2500</h2>
        <p>Arcoiris Waldorf de madera, pintado a mano en colores pastel.</p>
        
    </div>
};

export default ItemDetail;
