import NavBar from './components/NavBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './containers/ItemListContainer/itemListCointainer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/cartContext'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'





function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting="Hola, bienvenido a mi página" />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path='*' element={<NotFound />} />   
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
