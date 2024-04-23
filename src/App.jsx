import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

import './App.css'

function App() {

  return (
   <div>
    <NavBar />
    <ItemListContainer saludo = "Bienvenido a la tienda Aspros" />

    <h1>Tienda por y para mascotas </h1>
    <p>Tu compra colabora con los gastos de funcionamiento del albergue</p>
  </div>
  )
}

export default App