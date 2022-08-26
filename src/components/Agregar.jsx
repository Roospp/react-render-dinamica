import React from 'react'
import { useState } from 'react'

const AgregarColaboradores = ({colaboradores, setColaboradores}) => {

    const [nombreColaborador, setNombreColaborador] = useState('Desafio Renderizacion')
    const [correoColaborador, setCorreoColaborador] = useState('DesafioLatam@latam.com')

    const agregarLista = (e) =>{
        e.preventDefault()
        setColaboradores([...colaboradores, {id: new Date().getTime(), nombre: nombreColaborador, correo: correoColaborador}])
        console.log(`nueva lista agregada ${nombreColaborador} y ${correoColaborador}`)

        setNombreColaborador('')
        setCorreoColaborador('')
    }

    const capturaInputNombre = (e) =>{
        setNombreColaborador(e.target.value)
    }

    const capturaInputCorreo = (e) =>{
        setCorreoColaborador(e.target.value)
    }
  return (
    <div>
        <form onSubmit={agregarLista} className='formulario'>
            <label className='label'>Nombre del colaborador</label>
            <input type="text" placeholder='Ingrega el nombre del colaborador...' className='input-text' onChange={capturaInputNombre} value={nombreColaborador} />

            <label  className='label'>Correo del colaborador</label>
            <input type="text" placeholder='Ingresa el correo del colaborador...' className='input-text' onChange={capturaInputCorreo} value={correoColaborador} />

            <input type="submit" value="Agregar colaborador" className='input-button' />
        </form>
    </div>
  )
}

export default AgregarColaboradores