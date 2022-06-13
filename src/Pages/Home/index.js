import React, {useEffect, useState} from 'react'
import * as C from './style'
import {IoPersonOutline} from 'react-icons/io5'
import { User } from '../../components/User'
import {NavLink} from 'react-router-dom'
import {BiError} from 'react-icons/bi'

export const Home = () => {

    const [users, setUsers] = useState()
    
    useEffect(() => {
        let savedUser = localStorage.getItem('users')
        setUsers(JSON.parse(savedUser))
    }, [])

    return(
        <C.Container>
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
                                />
                            )
                        }) :
                        <><p className='empty-users'><BiError/> Não há usuários cadastrados!</p></> 
                    }
            </C.Content>
        </C.Container>
    )
}