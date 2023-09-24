import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Lato', sans-serif;
    color: #fff;
    display: block;
    font-size: 1.9rem;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 1.2rem;
    padding: 12px;
    border-radius: 10px;
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

  const SelectMonedas = () =>(
    <>
        <Label>{label}</Label>

        <Select
            onChange={e => setState(e.target.value)}
            value={state}
        >
            <option value="">- Seleccione -</option>

            {opciones.map(opcion => (
                <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
            ))}

        </Select>
    </>
  )
  return [state, SelectMonedas];
}

export default useSelectMonedas