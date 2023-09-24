import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const Input = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #6f71ff;
        cursor: pointer;
    }
`

const Form = () => {

    const [SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)

  return (
    <form action="">
        <SelectMonedas />
        <Input
            type="submit" 
            value="cotizar"
        />
    </form>
  )
}

export default Form