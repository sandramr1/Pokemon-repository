import React from "react";

const Navbar = () => {
        const logoUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return(
        <nav> 
            <img alt="Pokedex-logo"
                src = {logoUrl}
                className="Navbar-logo"
                />
        </nav>
    )
}

export default Navbar