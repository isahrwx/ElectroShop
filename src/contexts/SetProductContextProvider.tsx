import { createContext } from "react";
import productData from "../shared/productData.json";
export const SetProducContext=createContext<any>(null);
const SetProductContextProvider = (props) => {
    const product=productData;
  return (
    <div>
      <SetProducContext.Provider value={product}>
        {props.children}
      </SetProducContext.Provider>
    </div>
  )
}

export default SetProductContextProvider
