import HomeSlider from "./HomeSlider"
import deliveryImage from "../images/freeDeliveryIcon.png";
import supportImage from "../images/supportingIcon.png";
import paymentImage from "../images/flexiblePaymentIcon.png";
import PopualProducts from "./PopualProducts";
import BlackFridayBanner from "../images/ElectroShop Black Friday Tech.png";
const HomePage = () => {
  return (
    <div>
      <HomeSlider />


      <div className="service-features  flex justify-center gap-30 items-center py-5 px-6">
        <div className="delivery flex gap-3 items-center">
          <img className="w-15 h-10" src={deliveryImage} alt="" />
          <div className="">
            <h3 className="text-blue-950 font-bold text-lg ">Free Delivery</h3>
            <p className="text-gray-700">Enjoy free shipping on all orders.</p>
          </div>
        </div>
        <div className="support flex gap-3 items-center">
          <img className="w-15 h-10" src={supportImage} alt="" />
          <div className="">
            <h3 className="text-blue-950 font-bold text-lg">24/7 Customer Support</h3>
            <p className="text-gray-700">We're here to help you anytime.</p>
          </div>
        </div>
        <div className="payment flex gap-3 items-center">
          <img className="w-15 h-10" src={paymentImage} alt="" />
          <div className="">
            <h3 className="text-blue-950 font-bold text-lg">Flexible Payment</h3>
            <p className="text-gray-700">Choose from secure payment options.</p>
          </div>
        </div>
      </div>
      <div className="blackfridaybanner my-6 px-10">
        <img src={BlackFridayBanner} alt="" className="rounded-xl shadow" />
      </div>
<PopualProducts/>
    </div>
  )
}

export default HomePage
