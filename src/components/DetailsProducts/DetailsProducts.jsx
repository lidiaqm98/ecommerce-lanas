import { useParams } from "react-router-dom"
import "./DetailsProducts.css"
import { useEffect, useState } from "react"
import { useCart } from "../CartContext/CartContext"

const DetailsProducts = () => {
    const {id} =useParams()
    const [producto, setProducto]=useState(null)
    const[error, setError]=useState(null)

    const {agregarAlCarrito} = useCart();
    const handleAgregarAlCarrito =()=>{
        if(producto){
            agregarAlCarrito({
                id: producto.id,
                imagen: producto.image,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad:1
            })

        }
    }

    useEffect(()=> {
        const fetchProducto=async()=>{
            try{
                const response = await fetch(`https://api-ten-jet.vercel.app/products/${id}`) ;
                if(!response.ok){
                    throw new Error("Error al cargar los detalles del producto");
                }
                const data = await response.json();
                setProducto(data); // Guarda producto en el estado
            } catch(err) {
                setError(err.message);//Maneja errores
            }
        };
        fetchProducto();
    },[id])

    if (error) {
        return <h2 className="error-message">{error}</h2>
    }

  return (
    <div className="products-details">
        {
            producto? (
                <>
                <img src={producto.image}alt={producto.nombre} className="image-small" />
                <img src={producto.image}alt={producto.nombre}  />
                <div className="product-infos">
                    <h1>{producto.nombre}</h1>
                    <p className="price">{producto.precio}</p>
                    <p className="descripcion">{producto.descripcion}</p>
                    <div className="size-options">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                    <button className="add-to-cart"
                    onClick={handleAgregarAlCarrito}>Añadir al carrito</button>
                </div>
                <p className="note">
                    Producto 100% original. El pago contra reembolso está
                    disponible para este producto.
                    Politica de devolucion y cambio fácil dentro de los 7 dias.
                </p>
                </>
            ):(
                <p>Cargando producto ...</p>
            )
        }
    </div>
  )
}

export default DetailsProducts