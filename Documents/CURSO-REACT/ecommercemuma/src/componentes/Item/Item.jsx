const Item = ({id, name, description, price, image, stock}) => {
    return ( 
    <div>
        <h1>{name}</h1>
        <img src={image} alt={name}/>
        <p>{description}</p>
        <p>{price}</p>
        

    </div>);
};

export default Item;