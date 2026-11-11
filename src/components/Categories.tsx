import { useContext } from "react"
import { SetProducContext } from "../contexts/SetProductContextProvider"
import CategoryCart from "./CategoryCart";

const Categories = () => {
    const data=useContext(SetProducContext);
    const categorys= data.categoryInfo;

    
    
  return (
    <div className="flex flex-wrap justify-around">
        {categorys.map(category=> <CategoryCart key={category.id} categoryData={category}/>)}
    </div>
  )
}

export default Categories
