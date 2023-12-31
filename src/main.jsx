import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/pages/Home/Home';
import Main from './layout/Main';
import Blog from './components/pages/Blog/Blog';
import LogIn from './components/Log/LogIn';
import Registration from './components/Log/Registration';

import AuthProvider2 from './providers/AuthProvider2';
import AllToy from './components/AllToy/AllToy';
import MyToys from './components/MyToys/MyToys';
import AddToy from './components/AddToy/AddToy';
import AllToysDetails from './components/AllToy/AllToysDetails';
import PrivateRoute from './components/routes/PrivateRoute';
import UpdateToys from './components/MyToys/UpdateToys';
import ErrorPage from './components/shared/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "toyshops",
        element: <AllToy></AllToy>,
        loader: () => fetch(`https://gamezone-toy-shop-server.vercel.app/toyshops`)
      },

      {
        path: "toyshops/:id",
        element: <PrivateRoute><AllToysDetails></AllToysDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://gamezone-toy-shop-server.vercel.app/toyshops/${params.id}`)

      },

      {
        path: "mytoys",
        element: <MyToys></MyToys>,
        // loader: () => fetch(`http://localhost:2000/mytoys`)

      },
      {
        path: "mytoys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`https://gamezone-toy-shop-server.vercel.app/mytoys/${params.id}`)

      },
      {
        path: "addtoy",
        element: <AddToy></AddToy>
      },
      {
        path: "login",
        element: <LogIn></LogIn>
      },
      {
        path: "signup",
        element: <Registration></Registration>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='text-white max-w-6xl mx-auto '>

    <React.StrictMode>
      <AuthProvider2>
        <RouterProvider router={router} />
      </AuthProvider2>
    </React.StrictMode>

  </div>
)
