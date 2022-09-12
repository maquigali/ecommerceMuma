import Item from "../Item/Item";


const ItemList = ({ itemList }) => {
    console.log(itemList);
    return (
        <>
            {
                itemList.map((producto) => {

                    return (
                        <Item 
                        name={producto.name} 
                        image={producto.image}                        
                        price={producto.price}
                        id={producto.id}
                        categoria={producto.categoria}
                        />
    
                    )
                })
            }
            
        </>
    );
};

export default ItemList;