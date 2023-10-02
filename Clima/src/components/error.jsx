import React from 'react'

const cssp = {
  color: '#FF1A1A',
  fontWeight: '200',
  alignText: 'center',
  margin: '5px 10px '

}
const error = (props) => {
  if (props.valor !== 0) {
    return <p style={cssp}>Não foi possível encontrar uma cidade com esse nome, tente novamente.</p>
  }

}

export default error