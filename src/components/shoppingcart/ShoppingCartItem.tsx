import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { Trash } from "lucide-react";



const ShoppingCartItem = ({ selecteditemData }) => {

    const myProduct = selecteditemData;
    console.log(myProduct);
    const { Producttitle, brand, categories, id, image, price, quantity } = myProduct;
    const {dispatch} = useContext(CartContext);
    return (
        <div className="w-full  ">
            <div className="product-box flex h-fit py-5 shadow mx-6 my-8 px-4">
                <img src={image} alt=""  className="shadow shadow-gray-400 rounded-lg  h-40 w-40"/>
                <div className="cart-content flex flex-col gap-2 w-full  px-6">
                    <h3 className="text-lg font-bold text-blue-950">{Producttitle}</h3>
                    <div className="flex justify-between items-center w-59">
                        <p className="text-sm text-gray-500">{categories}</p>
                    <p className="text-sm flex justify-between items-center gap-1">Brand: <span className=" bg-blue-500 text-white px-2 py-0.5 rounded-full ">{brand}</span></p>
                    </div>
                    <span className="text-green-600 font-bold">{price}$</span>
                   <div className="flex gap-1 items-stretch">
                    

                    {quantity > 0 &&  <button className="bg-blue-500 text-white px-2 py-1" onClick={()=> dispatch({type:"INCREASE" ,payload:myProduct})}>
                    +
                    </button>  }
                    <span className="text-blue-500 flex items-center">{quantity}</span>

                    {quantity === 1 &&  <button className="bg-blue-500 text-white px-2 py-1" onClick={()=> dispatch({type:"REMOVE_ITEM" ,payload:myProduct})}>
                    <Trash color="white" size={15} />
                    </button> }

                     {quantity > 1 &&  <button className="bg-blue-500 text-white px-2 py-1" onClick={()=> dispatch({type:"DECREASE" ,payload:myProduct})}>
                    -
                    </button> }

                   </div>
                </div>



            </div>
        </div>
    )
}

export default ShoppingCartItem
