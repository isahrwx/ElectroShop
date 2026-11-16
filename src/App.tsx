
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import CategoryProducts from './components/CategoryProducts'
import SetCategoryContextProvider from './contexts/SetCategoryContextProvider'
import ProductDetails from './components/ProductDetails'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
        <SetCategoryContextProvider>
      <Routes>
        <Route path='/'  element={<HomePage/>} />
        <Route path='/categorys'  element={<Categories/>} />
        <Route path='/categorys/:title' element={<CategoryProducts/>} />
        <Route path='/categorys/:title/:id' element={<ProductDetails/>} />

      </Routes>

      <div>



        


      </div>
        </SetCategoryContextProvider>
    </>
  )
}

export default App
