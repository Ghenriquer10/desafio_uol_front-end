import React from 'react'
import * as C from './style'
import logoUol from '../../assets/uol-branco.png'
import { CgInstagram } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaWhatsapp } from 'react-icons/fa'
export const Header = () => {
    return(
        <C.Container>
            <div className='image-logo'>
                <img src={logoUol} alt="Imagem representando o logo redondo da Uol e o nome Uol"/>
            </div>
            <div className='contacts'>
                <div className='developer'>
                    <p>Gustavo Henrique Nogueira</p>
                </div>
                <div className='social-media'>
                    <a href='https://www.instagram.com/gustavo_h.n.f/'><CgInstagram color='#F92107'/></a>
                    <a href='https://github.com/Ghenriquer10'><AiFillGithub color='#fff'/></a>
                    <a href='https://www.linkedin.com/in/gustavo-henrique-a584021a2/'><GrLinkedinOption color='#0775F9'/></a>
                    <a href='https://wa.me/5561995776284'><FaWhatsapp color='#5FF907'/></a>
                </div>
            </div>
        </C.Container>
    )
}