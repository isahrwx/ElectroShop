import { useContext } from "react"
import { CartContext } from "../../contexts/CartContextProvider"
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCartComponent = () => {
    const {state} = useContext(CartContext);
    const {selectedItems , total} = state;
    console.log(total);
    
    
    
    return (
    <div>
            <h1 className="text-xl font-bold text-blue-950 border-b p-2 mx-6">My Cart</h1>
      <div className="shopping-cart-container p-6 flex w-full">
        <div className="left-box w-3/5 px-4">
            <div className="cart-items-box ">
                {selectedItems.map(item=> <ShoppingCartItem key={`${item.key}-${item.categories}`} selecteditemData={item}/> )}
            </div>
        </div>
        <div className="right-box w-2/5">
        <div className="h-full your-invoice w-full">
            <h3>your Invoice</h3>
            <div className="total-box">
                 <div className="cart-items-box w-full p-3  ">
                {selectedItems.map(item=> 
                <div className="flex bg-blue-900 text-white gap-1 my-3 p-1 rounded-full h-20">
                    <img src={item.image} className="w-20 rounded-l-full" alt="" />
                    <div className="content flex flex-col px-2 justify-center
                    "><h3 className=" text-lg">{item.Producttitle}</h3>
                   <span className="flex justify-between"> <h4 className="text-green-500 font-bold">{item.price}$</h4>
                    <h4 className="text-white">x{item.quantity}</h4></span>
</div>
                    </div> )}
            </div>
           <h3 className=" text-lg font-bold  w-full flex border-b border-b-blue-900 text-blue-900 p-3 "> total:  {total}$</h3>
            </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartComponent
