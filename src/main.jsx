import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/Auth/SignUp.jsx';
import SignIn from './pages/Auth/SignIn.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'signin',
        element:<SignIn></SignIn>
      },
    ]
  },
 
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
