import React from "react";
import { useState } from "react";
import { BaseColaboradores } from "./ArregloColaboradores";

const BuscarColaboradores = ({setColaboradores}) => {
  const [buscar, setBuscar] = useState("");

  const buscarColaborador = (e) => {
    let valor = e.target.value
    setBuscar(e.target.value);
    
    let filtrarBusqueda = BaseColaboradores.filter((colaborador) => 
      {
        return colaborador.nombre.toLowerCase().includes(valor.toLowerCase())
        || colaborador.correo.toLowerCase().includes(valor.toLowerCase())
      });

      if(valor.length <= 1 || filtrarBusqueda <= 1){
        filtrarBusqueda = BaseColaboradores
      }

    setColaboradores(filtrarBusqueda);
  };

  return (
    <div className="buscador">
      <h3 className="text-buscador"> Buscador de Colaboradores </h3>
      <input
        type="text"
        placeholder="Busca un colaborador"
        className="input-buscador"
        onChange={buscarColaborador}
        value={buscar}
      />
    </div>
  );
};

export default BuscarColaboradores;
