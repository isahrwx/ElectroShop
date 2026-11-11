
import './App.css'
import Categories from './components/Categories'
import SetProductContextProvider from './contexts/SetProductContextProvider'

function App() {
  return (
    <>
    <div>
   <SetProductContextProvider>

<Categories/>

   </SetProductContextProvider>


    </div>
    </>
  )
}

export default App
