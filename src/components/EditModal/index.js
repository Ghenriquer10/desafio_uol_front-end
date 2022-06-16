import React, { useRef, useContext, useState} from 'react';
import {useSpring, animated} from 'react-spring'
import { toast } from 'react-toastify';
import { DataContext } from '../../contexts/datas';
import * as C from './style'


export const EditModal = () => {

    const {editModal, setEditModal, index, allUsers} = useContext(DataContext)

    const[newCellPhone, setNewCellPhone] = useState()
    const[newEmail, setNewEmail] = useState()
    const[newStatus, setNewStatus] = useState()

    function handleDatas(e){
        e.preventDefault()
        const editedUser = {
            cpf: allUsers[index].cpf,
            email: newEmail === undefined ? allUsers[index].email : newEmail,
            name: allUsers[index].name,
            status: newStatus === undefined ? allUsers[index].status : newStatus,
            telefone: newCellPhone === undefined ? allUsers[index].telefone : newCellPhone
        }
        console.log(editedUser)
        newEditedUser(editedUser)
    }
    
    function newEditedUser(editedUser){
        allUsers[index] = editedUser
        localStorage.setItem('users', JSON.stringify(allUsers));
        toast.success('Editado com sucesso!');
        console.log(allUsers[index]);
        setTimeout(() => {
            window.location.replace("http://localhost:3000/");
        }, 2000)
    }

    const animation = useSpring({
        config: {
          duration: 550
        },
        opacity: editModal ? 1 : 0,
        transform: editModal ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeEditlModal = e => {
        if (detailRef.current === e.target) {
            setEditModal(false);
        }
      };

      const detailRef = useRef();

    return(
        <>
            <C.DetailsBackground onClick={closeEditlModal} ref={detailRef}>
                    <animated.div style={animation}>
                        <C.EditWrapper>
                            <C.DetailContent>
                                <C.Item>
                                    <form onSubmit={handleDatas}>
                                        <p>Editar dados de </p><h2>{allUsers[index].name}</h2>
                                        <label>Telefone:</label>
                                        <input defaultValue={allUsers[index].telefone} onChange={(e) => setNewCellPhone(e.target.value)}/>
                                        <label>Email:</label>
                                        <input defaultValue={allUsers[index].email} onChange={(e) => setNewEmail(e.target.value)}/>
                                        <label>Status:</label>
                                        <select defaultValue={allUsers[index].status} onChange={(e) => setNewStatus(e.target.value)}>
                                            <option>Status</option>
                                            <option name="ativo" value="ativo">Ativo</option>
                                            <option name="inativo" value="inativo">Inativo</option>
                                            <option name="agurdando" value="aguardando ativação">Aguardando ativação</option>
                                            <option name="desativado" value="desativado">Desativado</option>
                                        </select>
                                        <C.Buttons>
                                            <button className='close' onClick={e => setEditModal(false)}>Fechar</button>
                                            <button className='edite' type='submit'>Editar dados</button>
                                        </C.Buttons>
                                    </form>
                                </C.Item>
                            </C.DetailContent>
                        </C.EditWrapper>
                    </animated.div>
                </C.DetailsBackground>
        </>
    )
}