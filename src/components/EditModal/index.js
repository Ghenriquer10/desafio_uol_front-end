import React, { useRef, useContext, useState} from 'react';
import {useSpring, animated} from 'react-spring'
import { DataContext } from '../../contexts/datas';
import * as C from './style'


export const EditModal = () => {

    const {editModal, setEditModal, index, allUsers} = useContext(DataContext)

    const[newCellPhone, setNewCellPhone] = useState()
    const[newEmail, setNewEmail] = useState()
    const[newStatus, setNewStatus] = useState()

    function handleDates(){
        console.log(newCellPhone, newEmail, newStatus)
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
                        <C.EditWrapper modalEdit={editModal}>
                            <C.DetailContent>
                                <C.Item>
                                    <p>Editar dados de {allUsers[index].name}</p>
                                    <label>Telefone:</label>
                                    <input defaultValue={allUsers[index].telefone} onChange={(e) => setNewCellPhone(e.target.value)}/>
                                    <label>Email:</label>
                                    <input defaultValue={allUsers[index].email} onChange={(e) => setNewEmail(e.target.value)}/>
                                    <label>Status:</label>
                                    <input defaultValue={allUsers[index].status} onChange={(e) => setNewStatus(e.target.value)}/>
                                </C.Item>
                                <button onClick={handleDates}>Console</button>
                            </C.DetailContent>
                        </C.EditWrapper>
                    </animated.div>
                </C.DetailsBackground>
        </>
    )
}