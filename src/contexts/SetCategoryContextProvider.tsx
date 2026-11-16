import { createContext } from "react";
import productData from "../shared/productData.json";
export const SetCategoryContext=createContext<any>(null);
const SetCategoryContextProvider = (props) => {
    const category=productData;
  return (
    <div>
      <SetCategoryContext.Provider value={category }>
        {props.children}
      </SetCategoryContext.Provider>
    </div>
  )
}

export default SetCategoryContextProvider
