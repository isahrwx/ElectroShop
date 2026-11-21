import { useParams } from "react-router-dom"
import productData from "../shared/productData.json";
const ProductDetails = () => {
    const { title, id } = useParams();
    const products = productData[title];
    const indexP = id - 1;
    const product = products[indexP]
    const {Producttitle, description, image, altdescription, price, categories, color, brand} = product;
    

    return (
        <div className="flex p-6"> 
           <div className="left w-1/2 p-4">
            <img src={image} className="w-100 h-150 mx-auto rounded-2xl" alt={altdescription} />
           </div>
           <div className="right w-1/2 py-10 px-4 flex bg-gray-100 rounded-xl mt-20 flex-col gap-5  mr-15">
            <span  className="font-bold text-gray-600">{categories}</span>
            <h2 className="text-2xl ">{Producttitle}</h2>
            <div className=" items-end border-b  py-3 w-150 price-box flex justify-between">
                <span className="text-green-700 font-bold">{price}$</span>
            <span className="">Brand:{brand}</span>
            </div>
            <div className="details border-b pb-5">
                <h3 className="text-lg font-bold  text-blue-500">Description:</h3>
                <p className="text-justify text-black ">{description}</p>
            </div>
                <div className= " bg-blue-200 colorpalete flex rounded-xl my-4 items-center gap-3  p-6 ">
                    <h4 className="text-lg font-bold text-blue-600">Colors:</h4>
                    {color.map(scolor=> <div className={`w-10 h-4`} style={{background:scolor}}></div>)}

                </div>
           </div>
        </div>
    )
}

export default ProductDetails
