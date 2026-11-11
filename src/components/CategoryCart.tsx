
const CategoryCart = ({categoryData}) => {
    const categorydata=categoryData;
    const {categoryImage,categoryTitle}=categorydata;
    console.log(categorydata);
    
  return (
    <div className="w-80 p-5 shadow-xl shadow-gray-300 rounded-lg m-5">
        <img className="rounded-sm w-70 h-50 " src={categoryImage}  alt="" />
        <h3 className="text-center mt-3 text-xl font-bold text-gray-700">{categoryTitle}</h3>
        <button></button>
    </div>
  )
}

export default CategoryCart
