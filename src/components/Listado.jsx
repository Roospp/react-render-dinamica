import React from 'react'

const ListadoColaboradores = ({colaboradores}) => {
  return (
    <>
        <h2 className="titulo-lista">Lista de colaboradores</h2>
      <ul className="lista">
        {colaboradores.map((colaborador) => (
          <li key={colaborador.id}>
            <p>Nombre: <span>{colaborador.nombre}</span></p>
            <p>Correo: <span>{colaborador.correo}</span></p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListadoColaboradores