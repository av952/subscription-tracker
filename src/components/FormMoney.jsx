import React, { useState } from 'react'

export const FormMoney = ({setCount,setValid}) => {
    const [input,setInput] = useState(0)
    const [error,setError] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(input == '' || Number(input)< 0){
            setError(true)
        }else{
            setError(false)
            setCount(Number(input))
            setValid(true)
        }
    }

  return (
    <>
    <div className='form-money'>
        <p className='titulo'>Controla los gastos de tus suscripciones basado en tú presupuesto.</p>
        <form onSubmit={handleSubmit}>
        <p>Agregar presupuesto</p>
        <input type='number' placeholder='300' onChange={el =>setInput(el.target.value)}/>
        <input type='submit' value='Agregar'/>
        </form>

    </div>
        {error ?<p className='error'>Diligencie el campo por favor</p>:null}

    </>
  )
}
