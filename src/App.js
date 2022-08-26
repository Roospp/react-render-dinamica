import React from "react";
import { useState } from "react";
import AgregarColaboradores from "./components/Agregar";
import { BaseColaboradores } from "./components/ArregloColaboradores";
import BuscarColaboradores from "./components/Buscar";
import ListadoColaboradores from "./components/Listado";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  console.log(colaboradores)

  return (
    <div className="App">
      <BuscarColaboradores setColaboradores={setColaboradores}  />

      <AgregarColaboradores colaboradores={colaboradores} setColaboradores={setColaboradores} />

      <ListadoColaboradores colaboradores={colaboradores}/>
    </div>
  );
}

export default App;