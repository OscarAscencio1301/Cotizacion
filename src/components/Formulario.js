import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2'
import { calculoDeporte, calculoIngles, calculoPromedio, calculoSemestre } from '../helpers/calcularCot'
import { useDispatch, useSelector } from 'react-redux'
import { cotizarAlumno } from '../actions/cotizacionActions'
import { Resultado } from './Resultado'
import { Spinner } from './Spinner'

const Campo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
`
const Cajas = styled.select`
    flex: 0 0 80%;
    -webkit-appearance: none;
    padding: 0.3rem;
    border: 1px solid gray;
    outline: none;
    font-size: 1.1rem;

`
const Texto = styled.input`
    flex: 0 0 80%;
    padding: 0.3rem;
    border: 1px solid gray;
    outline: none;
    font-size: 1.1rem;
    color: black;
    &::placeholder{
        color: black;
    }
`

const Boton = styled.button`
    display: block;
    width: 95%;
    background-color: #001d3d;
    padding: 1rem 0;
    border: none;
    margin: 1rem auto;
    font-size: 1.2rem;
    color: white;
    &:hover{
        background-color: green;
        cursor: pointer;
    }
`

const Radio = styled.input`
    margin-left: 1rem;
`
export const Formulario = () => {
    const dispatch = useDispatch()
    let {costo} = useSelector(state => state.cotizacion)
    const [cargando, setcargando] = useState(false)

    const [valores, cambioInput, reset] = useForm({
        nombre: '',
        edad: '',
        semestre: '',
        ingles: '',
        deporte: '',
        promedio: ''
    })

    const enviarForm = (e) => {
        e.preventDefault();
        if(validarForm()) {
        const costoSemetre = calculoSemestre(semestre)
        const costoDeporte = calculoDeporte(deporte)
        const costoPromedio = calculoPromedio(promedio)
        const costoIngles = calculoIngles(ingles)
        const resultado = costoSemetre + costoDeporte + costoPromedio + costoIngles
        setcargando(true)
       setTimeout(() => {
        dispatch(cotizarAlumno({
            info: {...valores},
            costo: resultado
        }))
        setcargando(false)
       }, 2000);


        
    }
}

    const validarForm = () => {
        if(nombre.length < 2 ){
            Swal.fire({
                title: 'Coloca tu Nombre Completo',
                icon: 'error'
            })
            return false;
        }
        if(edad.length < 2 ){
            Swal.fire({
                title: 'Coloca tu Edad',
                icon: 'error'
            })
            return false;
        }
        if(semestre === ""){
            Swal.fire({
                title: 'Coloca tu Semestre al que ingresas',
                icon: 'error'
            })
            return false;
        }
        if(deporte  === "" ){
            Swal.fire({
                title: 'Coloca un Deporte',
                icon: 'error'
            })
            return false;
        }

        if(promedio  === "" ){
            Swal.fire({
                title: 'Coloca tu Promedio Anterior',
                icon: 'error'
            })
            return false;
        }
        return true;
    }

    const { nombre, edad, semestre, ingles, deporte, promedio } = valores;
    return (
        <>
        <form onSubmit={enviarForm}>
            <Campo>
                <label>Nombre</label>
                <Texto
                    type="text"
                    placeholder="Ingresa tu Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={cambioInput}
                />
            </Campo>

            <Campo>
                <label>Edad</label>
                <Texto
                    type="number"
                    min={14}
                    max={25}
                    placeholder="Ingresa tu Edad"
                    name="edad"
                    value={edad}
                    onChange={cambioInput}
                />
            </Campo>
            <Campo>
                <label>Semestre</label>
                <Cajas name="semestre" value={semestre} onChange={cambioInput}>
                    <option value="">Seleccione...</option>
                    <option value="primero">1°</option>
                    <option value="segundo">2°</option>
                    <option value="tercero">2°</option>
                    <option value="cuarto">4°</option>
                    <option value="quinto">5°</option>
                    <option value="sexto">6°</option>
                </Cajas>
            </Campo>

            <Campo>
                <label>Inglés</label>
                <div>
                    <Radio
                        type="radio"
                        name="ingles"
                        value="agregar"
                        checked={ingles === 'agregar'}
                        onChange={cambioInput}
                    />Agregar

                    <Radio
                        type="radio"
                        name="ingles"
                        value="No agregar"
                        checked={ingles === 'No agregar'}
                        onChange={cambioInput}
                    />No Agregar
                </div>
            </Campo>

            <Campo>
                <label>Deporte</label>
                <Cajas name="deporte" value={deporte} onChange={cambioInput}>
                    <option value="">Seleccione...</option>
                    <option value="futbol">Futbol</option>
                    <option value="basquetbol">Basquetbol</option>
                    <option value="besibol">Besibol</option>
                    <option value="lucha">Lucha</option>
                </Cajas>
            </Campo>

            <Campo>
                <label>Promedio</label>
                <div>
                    <Radio
                        type="radio"
                        name="promedio"
                        value="Excelnte"
                        checked={promedio === 'Excelnte'}
                        onChange={cambioInput}
                    />Excelente

                    <Radio
                        type="radio"
                        name="promedio"
                        value="Bueno"
                        checked={promedio === 'Bueno'}
                        onChange={cambioInput}
                    />Bueno

                    <Radio
                        type="radio"
                        name="promedio"
                        value="Regular"
                        checked={promedio === 'Regular'}
                        onChange={cambioInput}
                    />Regular
                </div>
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
         {
             cargando && <Spinner />
         }       
        {
            !cargando && costo > 0 && <Resultado />
        }
        </>
    )
}
