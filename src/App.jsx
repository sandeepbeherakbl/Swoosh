import { useState } from 'react'
import { BottomNav } from "./components/Footer/Footer.jsx";
import { Information } from "./components/Information.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
     <BottomNav/>,
     <Information />

  )
}

export default App
