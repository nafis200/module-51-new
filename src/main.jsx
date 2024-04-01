import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Login from './components/home/login/Login';
import Register from './components/home/login/Register';
import Authprovider from './provider/Authprovider';
import Orders from './components/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
         path: '/',
         element: <Home></Home>,
      },
      {
        path: '/login',
        element:<Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
         path: '/orders',
         element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>,
)
