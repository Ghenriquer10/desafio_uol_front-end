import React, {useContext} from 'react'
import * as C from './style'
import { DataContext } from '../../contexts/datas'
import {AiTwotonePoundCircle} from 'react-icons/ai'


    export const User = (props) => {

    const { setEditModal, setIndex, setDeleteModal } = useContext(DataContext)
    
    const handleEditModal = (index) => {
        setIndex(index)
        setEditModal(prev => !prev)
    }

    const handleDeleteModal = (index) => {
        setIndex(index)
        setDeleteModal(prev => !prev)
    }

    function handleColor(status){
        switch(status){
            case "ativo":
                return "green";
            case "inativo":
                return "red";
            case "aguardando ativação":
                return "orange";
            case "desativado":
                return "gray";
            default:
                return "blue"
        }
    }

    return(
        <C.Container>
            <div className='name-email'>
                <p className='bold'>{props.name}</p>
                <p className='grey'>{props.email}</p>
            </div>
            <div className='phone'>
                <p className='bold'>{props.cpf}</p>
                <p className='grey'>{props.telefone}</p>
            </div>
            <div className='status'>
                <p><AiTwotonePoundCircle color={handleColor(props.status)}/> {props.status}</p>
            </div>
            <div className='edit-button'>
                <button className='delete' onClick={e => handleDeleteModal(props.index)}>Excluir</button>
                <button className='edit' onClick={e => handleEditModal(props.index)}>Editar</button>
            </div>
        </C.Container>
    )
}