import React from 'react'
import styled from '@emotion/styled'
import { Formulario } from './Formulario'

const H1 = styled.h1`
    text-align: center;
    background-color: #001d3d;
    color: white;
    padding: 1rem 0;
`
const Contenedor = styled.div`
    width: 600px;
    margin: 0 auto;
`

export const Cotizacion = () => {
    return (
        <Contenedor>
            <H1>Cotiza tu Inscripción a la Prepa 92O</H1>
            <div style={{padding: '1rem 3rem', backgroundColor: 'white'}}>
                <Formulario />
            </div>
        </Contenedor>
    )
}
