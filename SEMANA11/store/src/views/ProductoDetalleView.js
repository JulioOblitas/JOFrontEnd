import {useState, useEffect, useContext} from "react"
import { CarritoContext } from "../context/carritoContext"
import {useParams} from "react-router-dom"
import { ObtenerProductosPorId } from "../services/productoService"
import ReactImageMagnify from  "react-image-magnify"


export default function ProductoDetalleView() {
    const [producto,setProducto] = useState(null);
    const [cantidad,setCantidad] = useState(1);

     const {id } = useParams();

     const {anadirACarrito} = useContext (CarritoContext)

     const getProducto  = async () =>{
         try {
             const prodObtenido = await ObtenerProductosPorId(id);
             setProducto(prodObtenido);
         } catch (error) {
             
         }
     }


     useEffect(()=>{

        getProducto();
     },[] );


         const modificarCantidad =  (numero) =>{
            if (cantidad + numero === 0 || cantidad + numero === 11) {
                return; //corta la ejecución
            }
            setCantidad(cantidad +numero)
            }

            const anadirACarritoContext = () =>{

                const  {id, nombre, precio} = producto;

                const nuevoproducto = {
                    id,nombre,precio,cantidad
                };
                anadirACarrito(nuevoproducto);
            }

    return (
        <div className="container">
            {/* en muchos casos es necesario y recomendable validar si algo es undefined o null */}
            <div className="row my-3">
                {/* si producto no es null, undefined o algún valor falsy, muestro el producto*/}
                {producto ? (
                    <>
                        <div className="col-12 col-md-6">
                            {/*<img src={producto.imagen} alt={producto.nombre} className="img-fluid" />*/}

                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: producto.nombre,
                                        isFluidWidth: true,
                                        src: producto.imagen,
                                    },
                                    largeImage: {
                                        src: producto.imagen,
                                        width: 1600,
                                        height: 1200,
                                    },
                                }}
                            />
                           </div> 
                        <div className="col-12 col-md-6">
                            <h4>{producto.nombre}</h4>
                            <h3>S/ {producto.precio}</h3>
                            <hr />
                            <p>{producto.descripcion}</p>
                            <div className="d-flex">
                                <button className="btn btn-dark"
                                
                                onClick={() => {
                                    modificarCantidad(-1);
                                }}
                                >
                                    <i className="fas fa-minus"></i>
                                </button>
                                <h4 className="mx-2">{cantidad}</h4>
                                <button className="btn btn-dark"
                                onClick={() => {
                                    modificarCantidad(+1);
                                }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                                <button className="btn btn-outline-dark ms-3" onClick ={anadirACarritoContext} >
                                    <i class="fas fa-cart-plus"></i> Añadir a carrito
                                </button>
                            </div>
                            <button className="btn btn-outline-dark btn-lg mt-2">Comprar ahora!</button>
                            </div>

                        
                    </>
                ) : null}
            </div>
        </div>
    )
}
