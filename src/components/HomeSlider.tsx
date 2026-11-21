import { useContext } from "react";
import { SetCategoryContext } from "../contexts/SetCategoryContextProvider";
import CategoryCart from "./CategoryCart";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination , Autoplay , Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import {  ArrowRight } from "lucide-react";
import "../styles/swip.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
const HomeSlider = () => {
  const data = useContext(SetCategoryContext);
  const categorys = data.categoryInfo;


  return (
    <div>
      <div className="home-slider-container flex h-100 bg-blue-100 py-2 justify-around px-4 ">
        <div className="left-box w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-4xl text-blue-950 font-bold">PREMIUM ELECTRONICS & AUDIO STORE</h2>
          <h3 className="text-3xl font-bold text-blue-600">Discover the Future of Technology</h3>
          <p className="text-gray-600 text-sm text-justify">Explore our exclusive collection of premium electronics, wireless audio devices, and smart accessories designed to upgrade your everyday life.</p>
          <Link to="/categorys" className="flex  items-center bg-blue-500 w-35 justify-center py-2 rounded-full my-3 text-white " >Shpping Now! <span><ArrowRight size={18}/></span></Link>
        </div>
        <div className="right-box  flex justify-center items-center w-80  ">
          <Swiper  centeredSlides={true}
            slidesPerView={1}
            spaceBetween={200}
            modules={[ Pagination , Autoplay , Navigation] } navigation={true} autoplay={{delay:2500 , disableOnInteraction:false}}
            pagination={{clickable:true}}
            >

            {categorys.map(category => <SwiperSlide> <CategoryCart key={category.id} categoryData={category} /></SwiperSlide>)}

          </Swiper>


        </div>
      </div>
    </div>
  )
}

export default HomeSlider
