import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import * as C from './style';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'

export const NewCostumer = () => {

    const { register, handleSubmit} = useForm()
    const [user, setUser] = useState();

    const onSubmit = data => {
        setUser(data)
        let localUser = JSON.parse(localStorage.getItem('users')) || [];
        localUser.push(data)
        localStorage.setItem('users', JSON.stringify(localUser))        
        toast.success('Usuário salvo com sucesso!')
        console.log(user)
        setTimeout(() => {
            window.location.replace("http://localhost:3000/");
        }, 2000)
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input required type="text" placeholder='Nome' {...register("name")}/>
                        <input required type="email" placeholder='E-mail' {...register("email")}/>
                        <InputMask required type="text" placeholder='CPF' mask="999.999.999-99" {...register("cpf") }/>
                        <InputMask placeholder='Telefone' mask="(99)99999-9999" {...register("telefone")}/>
                        <select {...register("status")}>
                            <option>Status</option>
                            <option name="ativo" value="ativo">Ativo</option>
                            <option name="inativo" value="inativo">inativo</option>
                            <option name="agurdado" value="aguardando ativação">Aguardando ativação</option>
                            <option name="desativado" value="desativado">Desativado</option>
                        </select>
                        <C.CostumerButtons>
                            <button className='create-costume' type='submit'>Criar</button>
                            <NavLink to={'/'} className='back-home'>Voltar</NavLink>
                        </C.CostumerButtons>
                    </form>
                </C.CostumerFields>
            </C.Content>
        </C.Container>
    )
}