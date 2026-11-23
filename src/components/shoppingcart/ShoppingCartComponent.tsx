import { useContext } from "react"
import { CartContext } from "../../contexts/CartContextProvider"

const ShoppingCartComponent = () => {
    const {state} = useContext(CartContext);
    const {selectedItems} = state;
    console.log(selectedItems);
    
    return (
    <div>
      
    </div>
  )
}

export default ShoppingCartComponent
