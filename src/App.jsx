import { useState } from 'react'
import { BottomNav } from "./components/Footer/Footer.jsx";
import { Information } from "./components/Information.jsx";
import './App.css'
import { Login } from './components/login/login'
import { Registration } from './components/registration/registration'
import { Option } from './components/OptionPage/option'
import { Dashboard } from './components/dashboard/dashboard'
import { Home } from './components/home/home'
import { Navbar } from './components/navbar/navbar'
import { Form } from './components/form/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
      
      <Navbar/>
      <Home/>
      <Form/>
    </div>
  )
}

export default App
