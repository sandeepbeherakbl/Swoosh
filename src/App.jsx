import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Login } from './components/login/login'
import { Registration } from './components/registration/registration'
import { Option } from './components/OptionPage/option'
import { Dashboard } from './components/dashboard/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Registration/> */}
      {/* <Option/> */}
      <Dashboard/>
    </div>
  )
}

export default App
