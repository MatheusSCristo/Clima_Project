import React,{useState} from 'react'
import Busca from './components/Busca'
import Resultado from './components/Resultado'
import Error from './components/error'
const App = () => {
  const [lugar,setLugar]=useState('')
  const key = "1d0a2b0af0f96e84e95ff9bcb3bd4602"
  const [local,setLocal]=useState() 
  const [dados,setDados]=useState()
  const [ceu,setCeu]=useState()
  const [error,setErro]=useState(0)

  async function CitySearch(lugar){
    const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=${key}&lang=pt_br&units=metric`)
    .then(response=>{
      if(response.ok) {
        setErro(0)
        return response.json()
      }
      else {
        throw Error()
      }
    }).catch(()=>setErro(1))
    
    setLocal(lugar)
    setDados(data)
    setCeu(data.weather[0].description)
  }
    const body=document.body
    if(ceu === 'algumas nuvens' || ceu === 'céu limpo' || ceu ==='nuvens dispersas'){
    body.classList.remove('cold')
    body.classList.add('hot')
  }
  else if(ceu === 'nublado' || ceu === 'chuva leve' || ceu ==='chuva forte'){
    body.classList.remove('hot')
    body.classList.add('cold')
  }
    
  return (
    
    <div className='conteiner'>
      <h1>Como está o tempo em :</h1>
      <Busca lugar={lugar} setLugar={setLugar} CitySearch={CitySearch}/>
      <Error valor={error}/>
      <Resultado local={local} dados={dados}/>
    </div>
  )
}

export default App