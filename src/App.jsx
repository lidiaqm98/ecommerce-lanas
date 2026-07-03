import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import DetailsProducts from "./components/DetailsProducts/DetailsProducts"
import { CartProvider } from "./components/CartContext/CartContext"
import Cart from "./components/cart/Cart"
import { useState } from "react"
import Search from "./components/search/Search"

function App() {
  const [buscarTermino, setBuscarTermino]=useState("");
  const handleBuscar = (termino) => {
    setBuscarTermino(termino.toLowerCase())
  }

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/ecommerce-lanas/" element={<Home buscarTermino = {buscarTermino} />}></Route>
            <Route path="/producto/:id" element={<DetailsProducts />}></Route>
            <Route path="/carrito" element={<Cart />}></Route>
            <Route path="/search" element={<Search onSearch = {handleBuscar} />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
