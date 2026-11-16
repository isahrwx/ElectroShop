import { useContext } from "react"
import CategoryCart from "./CategoryCart";
import { SetCategoryContext } from "../contexts/SetCategoryContextProvider";

const Categories = () => {
  const data = useContext(SetCategoryContext);
  const categorys = data.categoryInfo;



  return (
    <div className="flex flex-wrap justify-around">
      {categorys.map(category => <CategoryCart key={category.id} categoryData={category} />)}
    </div>
  )
}

export default Categories
