import React from 'react'
import * as C from './style'
export const User = () => {
    return(
        <C.Container>
            <div className='name-email'>
                <p>Nome: Gustavo Henrique</p>
                <p>email: ghenriquer10@gmail.com</p>
            </div>
            <div className='phone'>
                <p>CPF: 000.000.000-00</p>
                <p>Telefone: (61) 99999-9999</p>
            </div>
            <div className='status'>
                <p>Status: Inativo</p>
            </div>
            <div className='edit-button'>
                <button>Editar</button>
            </div>
        </C.Container>
    )
}