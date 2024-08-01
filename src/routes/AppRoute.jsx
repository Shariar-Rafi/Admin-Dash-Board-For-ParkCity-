import React from 'react'

import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
  } from "react-router-dom";
import RootLayout from '../components/layers/RootLayout';
import Home from '../pages/Home';

const AppRoute = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<RootLayout />}
            // errorElement={<ErrorPage />}

            >
                <Route index element={<Home />} ></Route>
                {/* <Route path='/admin-dashboard' element={<Service/>} ></Route> */}
            </Route>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default AppRoute
