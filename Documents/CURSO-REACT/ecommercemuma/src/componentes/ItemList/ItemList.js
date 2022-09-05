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
                        description={producto.description}
                        price={producto.price}
                        />
    
                    )
                })
            }
            
        </>
    );
};

export default ItemList;