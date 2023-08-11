import './App.css'
import phrases from './data/phrases.json'
import UserCard from './components/UserCard'
import fondo1 from '/images/fondo1.2.jpg'
import fondo2 from '/images/fondo2.2.jpg'
import fondo3 from '/images/fondo3.2.jpg'
import fondo4 from '/images/fondo4.2.jpg'
import { useState } from 'react'

function App() {
  const [images, setFondo] = useState(fondo1)
  const [index, setIndex] = useState(0)

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const changeFondo = () => {
    if(images === fondo1) setFondo(fondo2)
    if(images === fondo2) setFondo(fondo3)
    if(images === fondo3) setFondo(fondo4)
    if(images === fondo4) setFondo(fondo1)
    addIndex()
  }
const addIndex = ()=>{
  
    setIndex(randomNumberInRange(0,phrases.length -1))
 
  
}
    document.body.style.backgroundImage = `url(${images})`
  
  return (
    <>
     <UserCard data={phrases[index]}/>
     <button className='boton' onClick={changeFondo}>Probar Suerte</button>
    </>
  )
}

export default App
