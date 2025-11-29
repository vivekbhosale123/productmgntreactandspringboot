import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { ListProducts } from './components/ListProducts'
import { AddProduct } from './components/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
       <Router>
           <Routes>
                <Route exact path='/' element={<ListProducts/>}/>
                <Route exact path='/addproduct' element={<AddProduct/>}/>
           </Routes>
       </Router>
     </>
  )
}

export default App
