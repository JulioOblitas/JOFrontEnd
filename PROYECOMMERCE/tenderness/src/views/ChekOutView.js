import { useContext, useState } from "react";    
import { CarritoContext} from "../context/carritoContext"
import { useForm } from "react-hook-form";
import { guardarVenta } from "../services/ventaService";
import Swal from "sweetalert2";


import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";



export default function CheckOutView() {
    const { carrito } = useContext(CarritoContext);
    
    const [coordenadas, setCoordenadas] = useState([-12.0433, -77.028]);

    
    let total = 0;
    total = carrito.reduce((acum, prod) => {
        return acum + prod.cantidad * prod.precio;
    }, 0);

    // hook forms
    //register: es necesario para registrar c/input, messirve como referencia de los input
    //handleSubmit: función que me permite manejar el evento submit del form
    //errors: me permite por c/input mostrar un mensajito de error
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const recibirSubmit = async (data) => {
        try {
            let nuevaVenta = {
                ...data, //nombreCompleto, telefono, email, direccion
                coordenadas,
                productos: carrito,
                total,
            };
            await guardarVenta(nuevaVenta);
            Swal.fire({
                icon: "success",
                title: "Venta Realizada",
            });
        } catch (error) {
            console.log(error);
        }
    };

   

    const AnadirMarcador = () => {
        const map = useMapEvents({
            click: (e) => {
                // console.log("viendo useMapEvents", e);
                const { lat, lng } = e.latlng;
                setCoordenadas([lat, lng]);
            },
        });
        return null;
    };

    return (
        <div className="container mt-4">
            <h1>ORDEN DE COMPRA</h1>
            <div className="row my-2">
                <div className="col-12 col-md-6">
                    
                    <ul className="list-group">
                        {carrito.map((prod, i) => (
                            <li className="list-group-item d-flex justify-content-between" key={i}>
                                <div>
                                    <h6 className="fw-bold colorletraoc" >{prod.nombre}</h6>
                                    <small>Cantidad: {prod.cantidad}</small>
                                </div>
                                <div className="badge bg-danger rounded-pill p-4">
                                    {/* toFixed(entero), me permite manejar decimales en un número */}
                                    S/ {(prod.cantidad * prod.precio).toFixed(2)}
                                </div>
                            </li>
                        ))}
                        {/* pondré total */}
                        {total > 0 ? (
                            <li className="list-group-item d-flex justify-content-between fw-bold">
                                <span className="fw-bold">TOTAL ============================</span>
                                <h4>S/ {total.toFixed(2)}</h4>
                            </li>
                        ) : (
                            <li className="list-group-item">Todavía no ha agregado ningún producto.</li>
                        )}
                    </ul>
                </div>


                {/* formulario */}
                <div className="col-12 col-md-6">
                    <form onSubmit={handleSubmit(recibirSubmit)}>
                        <div className="mb-2">
                            <label className="form-label">Nombres y Apellidos</label>
                            <input
                                type="text"
                                placeholder="Ej. Julio Oblitas"
                                className="form-control"
                                {...register("cliente", { required: true })}
                            />
                            {/* errors.prop existe && retorna esto */}
                            {errors.cliente && <small className="text-danger">Este campo es obligatorio</small>}
                        </div>

                        <div className="mb-2">
                            <label className="form-label">Télefono</label>
                            <input
                                type="text"
                                placeholder="Ej. 934586160"
                                className="form-control"
                                {...register("telefono", {
                                    required: { value: true, message: "Es requerido" },
                                    minLength: { value: 6, message: "Se require 6 dígitos" },
                                    maxLength: { value: 14, message: "Máximo 14 dígitos" },
                                })}
                            />
                            {/* errors.prop existe && retorna esto */}
                            {errors.telefono && <small className="text-danger">{errors.telefono.message}</small>}
                        </div>

                        <div className="mb-2">
                            <label className="form-label">Correo</label>
                            <input
                                type="email"
                                placeholder="Ej. cloud@viasoluciones.com    "
                                className="form-control"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <small className="text-danger">Este correo es obligatorio</small>}
                        </div>

                        <div className="mb-2">
                            <label className="form-label">Dirección</label>
                            <input
                                type="text"
                                placeholder="Ej. AH JOSE GALVEZ MZ C LT19 VMT "
                                className="form-control"
                                {...register("direccion", { required: true })}
                            />
                            {errors.direccion && <small className="text-danger">Solo se acepta letras y dígitos</small>}
                        </div>


                        <MapContainer center={coordenadas} zoom={15} style={{ height: "400px" }}>
                            {/* Tile Layer es la fuente de datos para leaflet */}
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                             <AnadirMarcador />
                            <Marker position={coordenadas} />
                        </MapContainer>
                        <button type="submit" className="btn btn-primary btn-lg btncompraroc" disabled={carrito.length <= 0}>
                            Comprar <i class="fas fa-money-bill-wave-alt"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}