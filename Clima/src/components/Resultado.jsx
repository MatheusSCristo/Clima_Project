import React from 'react'
import Icons from './icons'
import Heat from './heat'

const Resultado = (props) => {
  if (props.local && props.dados) {
    return (
      <div className='result_box'>
        <div className='dados_text'>
          <h2>{props.dados.name}</h2>
          <div className='temp'>
            <Heat dados={props.dados} />
            <h2>{props.dados ? props.dados.main.temp.toFixed(1) : ''} °C</h2>
          </div>
          <h2>{props.dados.weather[0].description[0].toUpperCase() + props.dados.weather[0].description.substring(1)}</h2>
        </div>
        <div className='dados_img'>
          <Icons dados={props.dados} />
        </div>
      </div>
    )
  }
}

export default Resultado