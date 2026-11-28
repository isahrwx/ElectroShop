import { useContext } from "react"
import { SetCategoryContext } from "../contexts/SetCategoryContextProvider"
import ProductCart from "./ProductCart";

const PopualProducts = () => {
    const productsData = useContext(SetCategoryContext);
    const popular=productsData["Popularproducts"];
    console.log(popular);
    
    
  return (
    <div>
        <h2 className="section-title text-blue-950 text-2xl font-bold pt-10 pb-2 px-3  ">Popular Products</h2>
        <div className="flex flex-wrap px-3 py-3 justify-around gap-3 ">
      {popular.map(item=> <ProductCart key={item.id} productData={item}/>)}
    </div>
    </div>
  )
}

export default PopualProducts
