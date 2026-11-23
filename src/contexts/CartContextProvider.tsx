import { createContext, useReducer } from "react"

const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}
const calculateTotal = (products)=>{
    const total= products.reduce((sum , products)=> sum+ products.price * products.quantity , 0)
    return total;
}

export const  CartContext = createContext(null);
const cartReducer = (state, action) => {
   
    
    switch (action.type) {
        case "ADD_ITEM": {
            const updatedItems= [
        ...state.selectedItems,
        { ...action.payload, quantity: 1 }
    ]
             if (state.selectedItems.some(item =>
        item.id === action.payload.id &&
        item.categories === action.payload.categories
    )) {
        return state;
    }

    return {
        ...state,
        selectedItems: updatedItems
        , itemCounter:state.itemCounter+1,
        total:calculateTotal(updatedItems)
    };

        }

       case "REMOVE_ITEM": {
        const updatedItems=state.selectedItems.filter(item =>
      !(item.id === action.payload.id &&
        item.categories === action.payload.categories)
    )
  return {
    ...state,
    selectedItems:updatedItems ,itemCounter:state.itemCounter-1,total:calculateTotal(updatedItems)
  };
}
        case "INCREASE": {
            const updatedItems=state.selectedItems.map(item =>
            item.id === action.payload.id &&
            item.categories === action.payload.categories
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    return {
        ...state,
        selectedItems:updatedItems
        , itemCounter:state.itemCounter+1,
        total:calculateTotal(updatedItems)
       
    };
}
case "DECREASE": {
    const selectedItem = state.selectedItems.find(
        item =>
            item.id === action.payload.id &&
            item.categories === action.payload.categories
    );

    if (!selectedItem) return state;

    if (selectedItem.quantity === 1) {
        const updatedItems=state.selectedItems.filter(
                item =>
                    !(
                        item.id === action.payload.id &&
                        item.categories === action.payload.categories
                    )
            )
        return {
            ...state,
            selectedItems: updatedItems,itemCounter:state.itemCounter-1,total:calculateTotal(updatedItems)
        };
    }
const updatedItems = state.selectedItems.map(item =>
            item.id === action.payload.id &&
            item.categories === action.payload.categories
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    return {
        ...state,
        selectedItems: updatedItems,itemCounter:state.itemCounter-1 , total:calculateTotal(updatedItems)
    };
}
        case "CHECKOUT": {
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true
            }
        }
        case "CLEAR": {
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false
            }
        }
        default: return state;
    }
}

const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
      <CartContext.Provider value={{state , dispatch}}>
        {props.children}
      </CartContext.Provider>
    )
}

export default CartContextProvider
