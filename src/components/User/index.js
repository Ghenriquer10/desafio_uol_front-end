import React from 'react'
import * as C from './style'
export const User = (props) => {
    return(
        <C.Container>
            <div className='name-email'>
                <p>Nome: {props.name}</p>
                <p>Email: {props.email}</p>
            </div>
            <div className='phone'>
                <p>CPF: {props.cpf}</p>
                <p>Telefone: {props.telefone}</p>
            </div>
            <div className='status'>
                <p>Status: {props.status}</p>
            </div>
            <div className='edit-button'>
                <button>Editar</button>
            </div>
        </C.Container>
    )
}