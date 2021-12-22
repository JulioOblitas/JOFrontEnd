import { useState } from "react";

export default function Publicidad() {
  const [esconder, setEsconder] = useState(false);
  return (
    <div
      style={{
        position: "fixed",
        bottom: "550px",
        right: "350px",
        width: "430px",
        height: "100px",
        border: "1px solid blue",
        zIndex: 10,
        display: esconder ? "none" : null
        
      }}
    >
      <h3>Ve nuestras nuevas ofertas</h3>
      <button class="btn btn-success">Desde 50% de Dscto!!</button>
      <button
        class="btn btn-danger"
        onClick={() => {
          setEsconder(true);
        }}
      >
        X
      </button>
    </div>
  );
}