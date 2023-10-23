import NavBar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './containers/itemListContainer/itemListCointainer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting="Hola, bienvenido a mi página" />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
