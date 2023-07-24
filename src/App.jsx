import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes/routes'

const App = () => {
  return (
    <RouterProvider router={createBrowserRouter(routes)}/>

 )
}

export default App