import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";
import Search from "../search/Search";

const Home = ({buscarTermino})=> {
    const [buscarTerminoLocal, setBuscarTerminoLocal] = useState("");

    const handleBuscar=(termino)=>{
        setBuscarTerminoLocal(termino)
    }
    return(
        <>
        <Search onSearch={handleBuscar}/>
        <ProductList buscarTermino={buscarTerminoLocal || buscarTermino} />
        </>
    )
}
export default Home