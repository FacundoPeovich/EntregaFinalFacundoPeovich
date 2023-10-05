import { useState } from 'react'
import NavBar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './containers/itemListContainer/itemListCointainer'
import './App.css'



function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola, bienvenido a mi página" />
    </>
  )
}

export default App
