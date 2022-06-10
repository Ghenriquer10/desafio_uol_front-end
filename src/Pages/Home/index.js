import React from 'react'
import * as C from './style'
import {IoPersonOutline} from 'react-icons/io5'
import { User } from '../../components/User'
import {NavLink} from 'react-router-dom'

export const Home = () => {
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
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </C.Content>
        </C.Container>
    )
}