import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
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
