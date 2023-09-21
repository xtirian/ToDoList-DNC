import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//import bd
import LISTA_DE_TAREFAS from './mock/bd.mock';

//import components

import Home from './assets/Home/Home'

const Routing = () => {
  const Routes = createBrowserRouter([
    {path: `/`,
  element: <Home data={LISTA_DE_TAREFAS} />}
  ])

  return (
    <RouterProvider router={Routes}></RouterProvider>
  )
}

export default Routing