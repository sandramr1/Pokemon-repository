
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/BuscadorPokemon';
import {searchPokemon} from './Api'

const onSearchHandler = async (pokemon) => { 
  const result = await searchPokemon (pokemon)
  console.log('Pokemon: ', result)
}

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Navbar />
        <Searchbar  onSearch={onSearchHandler}/>
       <h1> POKEDEX </h1>
       <br></br>
       <input className="Buscador_Pokemon" placeholder='¿Quien es ese pokemon?'/>
      </header>
    </div>
  );
}

export default App;
