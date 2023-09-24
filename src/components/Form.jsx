import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

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

const Form = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [cripto, SelectCripto] = useSelectMonedas('Elige tu criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptomonedas = resultado.Data.map(cripto => {
                const objetoCripto = {
                    nombre: cripto.CoinInfo.FullName,
                    id: cripto.CoinInfo.Name
                }
                return objetoCripto
            })
            setCriptos(arrayCriptomonedas)
        }
        consultarAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        if([moneda, cripto].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            cripto
        })
    }

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form action=""
            onSubmit = {handleSubmit}
        >
            <SelectMonedas />
            <SelectCripto />

            <Input
                type="submit" 
                value="cotizar"
            />
        </form>
    </>
  )
}

export default Form