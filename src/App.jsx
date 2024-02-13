import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Order from './Pages/Order'
import OrderList from './Pages/OrderList'
Link
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Order />} />
        <Route path='/order-list' element={<OrderList />} />
      </Routes>

    </>
  )
}

export default App
