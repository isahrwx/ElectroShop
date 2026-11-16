import { useContext } from "react";
import { useParams } from "react-router-dom"
import { SetCategoryContext } from "../contexts/SetCategoryContextProvider";
import ProductCart from "./ProductCart";

const CategoryProducts = () => {
    const {title}=useParams();
    const products=useContext(SetCategoryContext);
    const filteredProducts = products[title];
    
    
  return (
    <div className="flex flex-wrap justify-evenly">
      {filteredProducts?.map(product => (
  <ProductCart key={product.id} productData={product} />
))}
    </div>
  )
}

export default CategoryProducts
