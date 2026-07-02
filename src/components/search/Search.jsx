import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Search.css"

const Search =({onSearch}) => {
  
  const[buscarTermino,setBuscarTermino]=useState("")
  const navigate = useNavigate()
  const handleBuscarChange = (e) => {
    const termino = e.target.value;
    setBuscarTermino(termino)
    onSearch(termino)

    if(termino.trim()!==""){
      navigate("/")
    }
  }

  return (
    <section className="search">
        <input type="search"
        placeholder="Buscar"
        className="search-bar" 
        value={buscarTermino}
        onChange={handleBuscarChange}/>

    </section>
  )
}

export default Search