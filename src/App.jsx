import { useState } from 'react'
import './index.css'
import Clothes from './Clothes.jsx'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Clothes/>
    </>
  )
}

export default App
