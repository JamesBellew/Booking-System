import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField } from './TextField'



const App: React.FC = ()=> {

  return (
    <>
  <div>
     hi
     <TextField text='hello' i={1} />
    </div>
    </>
  )
}

export default App
