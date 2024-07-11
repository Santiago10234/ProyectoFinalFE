import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Inicio from './Pages/Inicio.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import LuxuryCars from './Pages/LuxuryCars.jsx'
import Publicar from './Components/Publicar.jsx'
import PublicacionesUsuario from './Pages/PublicacionesUsuario.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registro",
    element: <Register/>
  },
  {
    path: "/luxuryCars",
    element: <LuxuryCars/>
  },
  {
    path: "/publicar",
    element: <Publicar/>
  },
  {
    path: "/mipublicacion",
    element: <PublicacionesUsuario/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
