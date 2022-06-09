import React from 'react'
import * as C from './style'
import logoUol from '../../assets/uol-branco.png'
export const Header = () => {
    return(
        <C.Container>
            <img src={logoUol} alt="Imagem representando o logo redondo da Uol e o nome Uol"/>
        </C.Container>
    )
}