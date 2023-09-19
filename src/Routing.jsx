import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './assets/Home/home'

const Routing = () => {
  const Routes = createBrowserRouter([
    {path: `/`,
  element: <Home />}
  ])

  return (
    <RouterProvider router={Routes}></RouterProvider>
  )
}

export default Routing