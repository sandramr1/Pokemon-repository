import React, { useState } from "react";

const Searchbar = (props) => {

    const {onSearch} = props 
    const [search, setSearch] = useState("Ditto")
    const onChangeHandler = (e) => {
setSearch(e.target.value)

    }
return(
        <div className="BuscadorPokemon-container"> 
            <div className="searchbar">
                <input placeholder="Inserte Pokemon" onChange={onChangeHandler}></input>
            </div>
            <div className="Searchbar-button"> 
                <button onClick={() => onSearch (search)}>Buscador Pokemon</button>
            </div>
        </div>
    )
} 

export default Searchbar