
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from './layouts/MainLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Login } from './components/Login/Login'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className='app'>
            <Routes>
              <Route element={<MainLayout />}>
                <Route
                  path='/'
                  element={<ItemListContainer titulo="Catalogo" />}
                />
                <Route
                  path='/category/:category'
                  element={<ItemListContainer titulo="Categoria" />}
                />
                <Route path='/detail/:id' element={<ItemDetailContainer />} />
                <Route path='/carrito/' element={<Cart />} />
              </Route>
              <Route path='/admin/' element={<AdminLayout />}>
                <Route index element={<Login />} />
                <Route path='/admin/alta-productos' element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                } />
              </Route>
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter >
    </>

  )
}

export default App
