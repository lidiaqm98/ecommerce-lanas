import { useCart } from "../CartContext/CartContext"
import "./Navbar.css"
import { Link } from 'react-router-dom' // Importado correctamente

const Navbar = () => {
    const {carrito}=useCart();
    const totalProductos =carrito.reduce(
        (acc, producto)=> acc + producto.cantidad, 0
    )
  return (
    <section className='header'>
        <h1 className='logo'> TR<span>ENDY</span></h1>
        <nav className='navbar'>
            <ul className='nav-links'>
                <li>
                    {/* CORREGIDO: Link con mayúscula */}
                    <Link to="/ecommerce-lanas/">Home</Link>
                </li>
            </ul>
        </nav>
        <div className='icons'>
            <button className='search-button'>
                <i className='fas fa-search'></i>
            </button>
            {/* CORREGIDO: Link con mayúscula */}
            <Link to="/carrito" className='icon-button'>
                <i className='fas fa-shopping-cart'></i>
                <span className='counter'>{totalProductos}</span>
            </Link>
        </div>
    </section>
  )
}

export default Navbar
