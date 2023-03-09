/**
 * Inventory Management using Reduxefy-Toolkit & React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { authRouter } from './Navigation/router.jsx';

function App() {
    return <RouterProvider router={authRouter} />;
}

export default App;
