import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Titulo = styled.h1`

    text-align: center;
    width: 95%;
    margin: 0 auto;
`

const Subtitulo = styled.h3`
    text-align: center;
    width: 95%;
    margin: 1rem auto;
    font-size: 2rem;
`
const Texto = styled.p`
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
`
const Subtexto = styled.span`
    font-size: 1rem;
    text-align: center;
    font-weight: lighter;
`

export const Resultado = () => {
    const { costo } = useSelector(state => state.cotizacion)
    const { info } = useSelector(state => state.cotizacion)

    const { nombre, edad, semestre, ingles, deporte, promedio } = info
    return (
        <div>
            <Titulo>Resumen:</Titulo>
            <Texto>Nombre: <Subtexto>{nombre}</Subtexto></Texto>
            <Texto>Edad: <Subtexto>{edad}</Subtexto></Texto>
            <Texto>Semestre: <Subtexto>{semestre}</Subtexto></Texto>
            <Texto>Inglés: <Subtexto>{ingles}</Subtexto></Texto>
            <Texto>Deporte: <Subtexto>{deporte}</Subtexto></Texto>
            <Texto>Promedio: <Subtexto>{promedio}</Subtexto></Texto>
            <TransitionGroup component="h3" className="resultado">
                <CSSTransition classNames="resultado" key={costo} timeout={{enter: 500, exit: 500}}>
                    <Subtitulo>Costo: <span>{costo}</span></Subtitulo>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}
