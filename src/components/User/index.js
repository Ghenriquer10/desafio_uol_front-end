import React, {useContext} from 'react'
import * as C from './style'
import { DataContext } from '../../contexts/datas'


export const User = (props) => {

    const { setEditModal, setIndex } = useContext(DataContext)
    
    const handleEditModal = (index) => {
        setIndex(index)
        setEditModal(prev => !prev)
    }

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
                <button onClick={e => handleEditModal(props.index)}>Editar</button>
            </div>
        </C.Container>
    )
}