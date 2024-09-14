import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './componants/Login'
import Home from './componants/Home'
import Cart from './componants/Cart'
import { Provider } from 'react-redux'
// import store from './store/store'
import store from './thunk/store'

import Signup from "./componants/Signup";
import Formik from './componants/Formik'
import FormikPage from './componants/Formik'
import Debounce from './componants/Debounce'

export const Context = createContext()

function App() {

  const [name, setname] = useState("abinesh")
  return (
    // <Context.Provider value={name}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/form' element={<FormikPage />} />
          <Route path='/debounce' element={<Debounce />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    // </Context.Provider>
  )
}

export default App
