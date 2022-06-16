import React, {useRef, useContext} from 'react'; 
import * as C from './style';
import {useSpring, animated} from 'react-spring';
import { toast } from 'react-toastify';
import { DataContext } from '../../contexts/datas';

export const UserDelete = () => {
    const modalDeleteRef = useRef();

    const {deleteModal, setDeleteModal, index, allUsers} = useContext(DataContext)

    const animation = useSpring({
        config: {
          duration: 550
        },
        opacity: deleteModal ? 1 : 0,
        transform: deleteModal ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeDeleteModal = e => {
          if (modalDeleteRef.current === e.target){
              setDeleteModal(false);
          }
      };

      function handleDelete(){
        allUsers.splice(index, 1)
        localStorage.setItem('users', JSON.stringify(allUsers));
        toast.success('Usuário excluído com sucesso!')
        setTimeout(() => {
            window.location.reload()
        }, 2000)
      }

      return(
          <>
            {deleteModal ? (
                <C.BackgroundDelete onClick={closeDeleteModal} ref={modalDeleteRef}>
                    <animated.div style={animation}>
                        <C.DeleteWrapper>
                            <C.DeleteContent>
                                <h1>Deletar usuário</h1>
                                <p>Tem certeza que deseja excluír este usuário?</p>
                                <C.ButtonDelete>
                                    <button className='cancel' onClick={() => setDeleteModal(prev => !prev)}>Cancelar</button>
                                    <button className='delete' onClick={handleDelete}>Excluir</button>
                                </C.ButtonDelete>
                            </C.DeleteContent>
                        </C.DeleteWrapper>
                    </animated.div> 
                </C.BackgroundDelete>
            ) : null}
          </>
      )
}