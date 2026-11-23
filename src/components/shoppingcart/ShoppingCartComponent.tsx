import { useContext } from "react"
import { CartContext } from "../../contexts/CartContextProvider"
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCartComponent = () => {
    const {state} = useContext(CartContext);
    const {selectedItems} = state;
    
    
    return (
    <div>
      <div className="shopping-cart-container p-6">
        <div className="left-box ">
            <h1 className="text-xl font-bold text-blue-950 border-b p-2 ">My Cart</h1>
            <div className="cart-items-box w-2/3">
                {selectedItems.map(item=> <ShoppingCartItem key={`${item.key}-${item.categories}`} selecteditemData={item}/> )}
            </div>
        </div>
        <div className="right-box w-1/3">
        <div className="copons"></div>
        <div className="your-order"></div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartComponent
