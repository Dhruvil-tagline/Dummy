import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Protected from './components/Protected'
import Product from './components/Prdocut'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/about',
        element: <h1>About us </h1>
      },
      {
        path: '/contact',
        element: <h1>Contact us</h1>
      },
      {
        path: '/product',
        element: <Protected><Product /></Protected>,
        children: [
          {
            path: 'createProduct',
            element: <h1>Create your product</h1>
          },
          {
            path: 'listProduct',
            element: <h1>List of Product</h1>
          }
        ]
      }, {
        path: '/login',
        element: <h1>Please login</h1>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
