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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "alltoys",
        element: <AllToy></AllToy>
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>
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
