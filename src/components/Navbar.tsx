import { Link } from "react-router-dom";
import logo from "../images/ElectroShopLogo.png";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  
  return (
    <div>
      <div className="navbar-container px-10 " style={{background:'#0B132B'}}>
        <div className="top-navbar flex gap-6  items-center  border-b  border-b-gray-600 w-full h-30 ">
            <div className="logo-box w-1/4">
           <Link to="/"> <img src={logo} alt="electroshop logo" className="w-35 h-15" /></Link>
            </div>
            <div className="search-box-container px-3 py-3 rounded-lg h-13 bg-blue-950 border border-blue-800 w-2/4" >
            <div className="searchbox flex justify-between">
              <input type="text" placeholder="Search For Product ..." className="text-amber-50 w-200 py-1 focus:outline-none"  name="" id="" /> <span>
                <Search size={22} className="text-blue-400"/>
                </span></div>
            </div>
            <div className="user-area-box-container w-1/4">
            <div className="user-area-box flex w-full items-center justify-center gap-4">
                <button className="bg-blue-950 border border-blue-800 text-white px-4 py-1 hover:bg-blue-600 rounded-lg ">Login</button>
                <button className="text-white border-b border-b-blue-700 hover:text-blue-300">Sign Up</button>
               <Link to="/shoppingcart">
               
                 <ShoppingCart color="white" size={25} />
               </Link>
            </div>
            </div>
        </div>
        <div className="bottom-navbar-container w-full h-15  ">
    <div className="bottom-navbar items-center py-2 flex justify-center gap-5">
      <Link to="/" className="text-white border-b border-b-blue-400 py-1 text-center hover:text-blue-300">Home</Link>
      <Link to="/categorys" className="text-white border-b border-b-blue-400 py-1 text-center hover:text-blue-300">Categorys</Link>
      
    </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
