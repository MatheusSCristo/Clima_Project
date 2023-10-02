import React, { useState } from 'react'
import { GrSearch } from 'react-icons/gr'

const Busca = (props) => {

  return (
    <div className='search_box'>
      <input type='text' placeholder='Busque sua cidade' value={props.lugar} onChange={(e) => props.setLugar(e.target.value)}></input>
      <GrSearch size={25} className='search_icon' style={{margin: '1vh', borderRadius: '15px', padding: '10px' }} onClick={() => props.CitySearch(props.lugar)} />
    </div>
  )
}

export default Busca  