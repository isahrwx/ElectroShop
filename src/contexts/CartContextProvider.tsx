import { createContext, useReducer } from "react"

const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}


export const  CartContext = createContext(null);
const cartReducer = (state, action) => {
   
    switch (action.type) {
        case "ADD_ITEM": {
             if (state.selectedItems.some(item =>
        item.id === action.payload.id &&
        item.categories === action.payload.categories
    )) {
        return state;
    }

    return {
        ...state,
        selectedItems: [
            ...state.selectedItems,
            { ...action.payload, quantity: 1 }
        ]
        , itemCounter:state.itemCounter+1
    };

        }

       case "REMOVE_ITEM": {
  return {
    ...state,
    selectedItems: state.selectedItems.filter(item =>
      !(item.id === action.payload.id &&
        item.categories === action.payload.categories)
    ),itemCounter:state.itemCounter-1
  };
}
        case "INCREASE": {
    return {
        ...state,
        selectedItems: state.selectedItems.map(item =>
            item.id === action.payload.id &&
            item.categories === action.payload.categories
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
        , itemCounter:state.itemCounter+1
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
        return {
            ...state,
            selectedItems: state.selectedItems.filter(
                item =>
                    !(
                        item.id === action.payload.id &&
                        item.categories === action.payload.categories
                    )
            ),itemCounter:state.itemCounter-1
        };
    }

    return {
        ...state,
        selectedItems: state.selectedItems.map(item =>
            item.id === action.payload.id &&
            item.categories === action.payload.categories
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ),itemCounter:state.itemCounter-1
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
