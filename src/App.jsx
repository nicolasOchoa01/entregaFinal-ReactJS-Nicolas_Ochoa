import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout_TEMP";
import { AdminLayout } from "./layouts/AdminLayout_TEMP";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
//correccion
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar */}
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={<ItemListContainer titulo={"Bienvenidos"} />}
              />
              <Route
                path="/category/:category"
                element={<ItemListContainer titulo={"Bienvenidos"} />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
            </Route>

            <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<Login/>} />
              <Route
                path="alta-productos"
                element={
                  <RutaProtegida>
                    <ProductFormContainer/>
                  </RutaProtegida>
                }
              />
            </Route>
          </Routes>
          {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar */}
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
