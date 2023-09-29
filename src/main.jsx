import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MemoExample from "./examples/memo/MemoExample.jsx"
import CallbackExample from "./examples/callback/CallbackExample.jsx";
import {DashboardContext} from "./examples/context/DashboardContext.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MemoExample />,
    },
    {
        path: '/callback-example',
        element: <CallbackExample />
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DashboardContext.Provider value={{
          name: "shahab"
      }}>
        <RouterProvider router={router} />
      </DashboardContext.Provider>
  </React.StrictMode>,
)
