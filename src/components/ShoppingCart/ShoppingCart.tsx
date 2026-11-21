
const ShoppingCartComponent = () => {
  return (
    <div className="shopping-cart-container ">
      <h1>Shopping Cart</h1>
      <div className="shoppingcard-content flex w-full">

      <div className=" w-6/10 left-box product-carts-container">
        <h2 className=" bg-white border border-blue-950">Products</h2>
      </div>
      <div className=" w-4/10  right-box order-sammary-container flex-4">
        <h2>Order Summary</h2>
      </div>
      </div>
    </div>
  )
}

export default ShoppingCartComponent
