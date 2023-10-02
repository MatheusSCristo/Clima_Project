import React from 'react'
import { BsThermometerSun, BsThermometerSnow } from 'react-icons/bs'
import { FaThermometerHalf } from 'react-icons/fa'
const heat = (props) => {
    if (props.dados.main.temp >= '27') {
        return (<BsThermometerSun size={30} />)
    }
    else if (props.dados.main.temp < '17') {
        return (<BsThermometerSnow size={30} />)
    }
    else {
        return (<FaThermometerHalf size={30} />)
    }
}

export default heat