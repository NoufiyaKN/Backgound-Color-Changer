import { useState } from 'react'
import './App.css'

function App() {
const [backgroundColor,setBackgroundColor] = useState('');

  const colorChange = (color)=>{
    setBackgroundColor(color)
  }
  return (
    <div style={{height : '100vh',width : '100%', backgroundColor}} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{color : 'black'}}>Background Color Changer</h1>
      <div>
        <button style={{marginRight : '5px',color : 'green'}} className='button' onClick={()=>colorChange('green')}>Green</button>
        <button style={{marginRight : '5px',color : 'orange'}} className='button' onClick={()=>colorChange('orange')}>Orange</button>
        <button style={{marginRight : '5px',color : 'blue'}} className='button' onClick={()=>colorChange('blue')}>Blue</button>
        <button style={{marginRight : '5px',color : 'pink'}} className='button' onClick={()=>colorChange('pink')}>Pink</button>
        <button style={{marginRight : '5px',color : 'red'}} className='button' onClick={()=>colorChange('red')}>Red</button>
      </div>
    </div>
    )
}

export default App
