import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContextProvider";
import { isInCart , quantityCount } from './../shared/Helper';
import { Trash } from "lucide-react";

const ProductCart = (props) => {

  const productData = props.productData;

  const { id, Producttitle, image, altdescription, price, categories,  brand } = productData;
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="w-60 rounded-2xl m-6 shadow-lg hover:shadow-gray-400 transition-all duration-75" >
      <img src={image} alt={altdescription} className="rounded-t-2xl w-full h-60" />
      <div className="content p-2 flex flex-col gap-5">
        <div className="flex justify-between">

          <span className="text-gray-500">{categories}</span>
          <span className="text-blue-500">{brand}</span>
        </div>
        <h3 className="font-bold "> {Producttitle}</h3>
        <div className="font-bold text-green-600">{price}$</div>
        <div className="flex justify-between">

          <Link to={`/categorys/${categories}/${id}`} className="text-blue-500 px-3 rounded-sm ">Details</Link>

          <div className="flex flex-row-reverse gap-2">
            {isInCart(state, id,categories)
              ? <button className="bg-blue-500 px-3 rounded-sm text-white hover:bg-blue-900" onClick={() => dispatch({ type: "INCREASE", payload: productData })} >+</button>
              : <button className="bg-blue-500 px-3 rounded-sm text-white hover:bg-blue-900" onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })} >Add To Cart</button>
            }
            {
              quantityCount(state , id,categories ) === 1 && <button className="bg-blue-500 px-3 rounded-sm text-white hover:bg-blue-900" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })} ><Trash size={16}/></button>
            }
           {
             quantityCount(state , id ,categories) >1 && <button className="bg-blue-500 px-3 rounded-sm text-white hover:bg-blue-900" onClick={() => dispatch({ type: "DECREASE", payload: productData })} >-</button>
            }
          </div>
          


        </div>
      </div>

    </div>
  )
}

export default ProductCart
