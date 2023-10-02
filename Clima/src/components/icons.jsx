import React from 'react'
import { BsFillCloudsFill, BsCloudRainHeavyFill, BsSunFill, BsCloudSunFill, BsFillCloudRainFill, BsFillCloudFill } from 'react-icons/bs'

const icons = (props) => {
    switch (props.dados.weather[0].description) {
        case 'nuvens dispersas':
            return (<BsCloudSunFill size={50} />)
        case 'nublado':
            return (<BsFillCloudsFill size={50} />)
        case 'chuva leve':
            return (<BsFillCloudRainFill size={50} />)
        case 'céu limpo':
            return (<BsSunFill size={50} />)
        case 'algumas nuvens':
            return (<BsFillCloudFill size={50} />)
        case 'chuva forte':
            return (<BsCloudRainHeavyFill size={50} />)
    }
}

export default icons