import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Inicio from './Inicio.jsx'
import Register from './Register.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/registro",
    element: <Register/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
