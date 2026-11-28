
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import CategoryProducts from './components/CategoryProducts'
import SetCategoryContextProvider from './contexts/SetCategoryContextProvider'
import ProductDetails from './components/ProductDetails'
import HomePage from './components/HomePage'
import CartContextProvider from './contexts/CartContextProvider'
import ShoppingCartComponent from './components/shoppingcart/ShoppingCartComponent'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Aboutme from './components/Aboutme'

function App() {
  return (
    <>
      <SetCategoryContextProvider>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/aboutme' element={<Aboutme />} />
            <Route path='/categorys' element={<Categories />} />
            <Route path='/shoppingcart' element={<ShoppingCartComponent />} />
            <Route path='/categorys/:title' element={<CategoryProducts />} />
            <Route path='/categorys/:title/:id' element={<ProductDetails />} />
          </Routes>
          <Footer/>
        </CartContextProvider>

  
      </SetCategoryContextProvider>
    </>
  )
}

export default App
