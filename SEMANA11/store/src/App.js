import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./context/authContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import CheckOutView from  "./views/ChekOutView"
import Navegacion from "./components/Navegacion";
import ProductoDetalleView from "./views/ProductoDetalleView";
import CarritoContextProvider from "./context/carritoContext";
import CarritoView from "./views/CarritoView";
import NotFound from "./views/NotFound";
import ProductoConFiltrosView from "./views/ProductoConFiltrosView";

export default function App() {
    return (
        <AuthContextProvider>
            {/* aquí dentro del provider puedo poner tanto componentes como rutas */}
            <CarritoContextProvider>
            <Router>
                <Navegacion />
                <Routes>
                |   <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<HomeView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/detalleproducto/:id" element={<ProductoDetalleView />} />
                    <Route path = "/carrito" element={<CarritoView />}/>
                    <Route path="/productosfiltros">
                            <Route path="/productosfiltros" element={<ProductoConFiltrosView />} />
                            <Route path="/productosfiltros/:busqueda" element={<ProductoConFiltrosView />} />
                        </Route>


                {/**Ruta privadas*/}
                    <Route
                        path="/checkout"
                        element={
                            <PrivateRoute>
                                <CheckOutView />
                            </PrivateRoute>
                        }
                    />
                    
                </Routes>
            </Router>
            </CarritoContextProvider>
        </AuthContextProvider>
    );
}
