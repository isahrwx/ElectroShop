import { Link } from "react-router-dom";

const CategoryCart = ({categoryData}) => {
    const categorydata=categoryData;
    const {categoryImage,categoryTitle}=categorydata;
    
  return (
    <div className="w-80 p-5 shadow-xl shadow-gray-300 rounded-lg flex flex-col justify-center items-center  m-5 ">
        <img className=" rounded-sm w-70 h-50 " src={categoryImage}  alt="" />
        <h3 className="text-center mt-3  text-xl font-bold text-gray-700">{categoryTitle}</h3>
        <Link to={`/categorys/${categoryTitle}`} className=" bg-blue-500  px-4 py-1 rounded-lg text-white   mt-5">View Products</Link>
    </div>
  )
}

export default CategoryCart
