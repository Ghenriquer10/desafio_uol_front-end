import React, {useContext, useEffect, useState} from 'react'
import * as C from './style'
import {IoPersonOutline} from 'react-icons/io5'
import { User } from '../../components/User'
import {NavLink} from 'react-router-dom'
import {BiError} from 'react-icons/bi'
import { DataContext } from '../../contexts/datas'
import { EditModal } from '../../components/EditModal'
import { UserDelete } from '../../components/UserDelete'

export const Home = () => {

    const {editModal, setAllusers} = useContext(DataContext)

    const [users, setUsers] = useState()
    
    useEffect(() => {
        let savedUser = localStorage.getItem('users')
        setUsers(JSON.parse(savedUser))
        setAllusers(JSON.parse(savedUser))
    }, [setAllusers])

    return(
        <>
            {editModal ? <EditModal/> : 
            <C.Container>
                <UserDelete/>
                <C.Content>
                    <C.Title>
                        <h1><IoPersonOutline/>Painel de clientes</h1>
                    </C.Title>
                    <C.AddUser>
                        <div className='add-title'>
                            <p>Listagem de usuário</p>
                            <p>Escolha um cliente para visualizar os detalhes</p>
                        </div>
                        <div className='add-button'>
                            <NavLink to={'newcostumer'}>Novo cliente</NavLink>
                        </div>
                    </C.AddUser>
                        {users ? users.map((user, index) => {
                                return(
                                        <User 
                                            key={index}
                                            name={user.name}
                                            email={user.email}
                                            cpf={user.cpf}
                                            status={user.status}
                                            telefone={user.telefone}
                                            index={index}
                                        />
                                )
                            }) :
                            <><p className='empty-users'><BiError/> Não há usuários cadastrados!</p></> 
                        }
                </C.Content>
            </C.Container>
            }
        </>
    )
}