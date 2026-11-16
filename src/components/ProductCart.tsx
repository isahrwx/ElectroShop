import { Link } from "react-router-dom";

const ProductCart = (props) => {
    const productData = props.productData;
    
    console.log(productData);
    const {id,Producttitle , image ,description,altdescription,price,categories,color,brand}= productData;

    
  return (
    <div className="w-60 rounded-2xl m-6 shadow-lg *:">
        <img src={image} alt={altdescription} className="rounded-t-2xl w-full h-80"/>
        <div className="content p-2 flex flex-col gap-5">
        <div className="flex justify-between">

        <span className="text-gray-500">{categories}</span>
        <span className="text-blue-500">{brand}</span>
        </div>
        <h3 className="font-bold "> {Producttitle}</h3>
        <div className="flex justify-between">

        <span className="font-bold text-green-600">{price}$</span>
        <Link to={`/categorys/${categories}/${id}`} className="bg-blue-500 px-3 rounded-sm text-white">Details</Link>
        </div>
        </div>
        
    </div>
  )
}

export default ProductCart
