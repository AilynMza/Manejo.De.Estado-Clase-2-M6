import { useState } from "react";

function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      const arregloBase = [...productosOriginales, nuevoProducto];
      setProductosOriginales(arregloBase);
      setProductos(arregloBase);
      setNuevoProducto("");
    }
  };

  const filtrar = () => {
    if (nuevoProducto.trim() === "") {
      setProductos(productosOriginales);
    } else {
      const result = productosOriginales.filter((product) => product == nuevoProducto
      );
      setProductos(result);
    }
  };

  const eliminarProducto = (index) => {
    const arregloInicial = [...productosOriginales];
    arregloInicial.splice(index, 1);
    setProductosOriginales(arregloInicial);
    setProductos(arregloInicial);
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <button onClick={filtrar}>Filtrar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;
