import React, { useState} from 'react';
import {NavLink} from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import * as C from './style';

export const NewCostumer = () => {

    const[costumerValues, setCostumerValues] = useState('')

    const handleCostumer = (value) => {
        setCostumerValues(prevValue => ({
            ...prevValue,
            [value.target.name] : value.target.value
        }));

        console.log(costumerValues)
    }

    const handleSaveCostumer = () => {
        if(costumerValues.nome === undefined 
            && costumerValues.email === undefined 
            && costumerValues.cpf === undefined
            && costumerValues.telefone === undefined){
                
            alert('Preencha os campos')
            console.log(costumerValues.nome)
        } else {
            alert('Usuário adicionado')
            console.log(costumerValues.nome)
        }
    }

    return(
        <C.Container>
            <C.Content>
                <C.Title>
                    <h1><IoPersonOutline/>Painel de clientes</h1>
                </C.Title>
                <C.AddUser>
                    <div className='add-title'>
                        <p>Novo usuário</p>
                        <p>Informe os campos a seguir para criar novo usuário:</p>
                    </div>
                </C.AddUser>
                <C.CostumerFields>
                    <input placeholder='Nome' name='nome' onChange={handleCostumer}/>
                    <input placeholder='E-mail' name='email' onChange={handleCostumer}/>
                    <input placeholder='CPF' name='cpf' onChange={handleCostumer}/>
                    <input placeholder='Telefone' name='telefone' onChange={handleCostumer}/>
                    <select onChange={handleCostumer}>
                        <option>Status</option>
                        <option name="ativo">Ativo</option>
                        <option name="inativo">inativo</option>
                        <option name="agurdado">Aguardando ativação</option>
                    </select>
                </C.CostumerFields>
                <C.CostumerButtons>
                    <button onClick={handleSaveCostumer} className='create-costume'>Criar</button>
                    <NavLink to={'/'} className='back-home'>Voltar</NavLink>
                </C.CostumerButtons>
            </C.Content>
        </C.Container>
    )
}