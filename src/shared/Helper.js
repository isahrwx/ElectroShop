export const isInCart=(state, id , categories)=>{
   return state.selectedItems.some(item=> item.id === id && item.categories === categories)
}



export const quantityCount=(state , id,categories)=>{
   const product = state.selectedItems.find(item =>
    item.id === id && item.categories === categories
  );
  return product?product.quantity:0
}