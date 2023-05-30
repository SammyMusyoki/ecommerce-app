import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout';
import Home from './Pages/Home';
import VendorAdmin from './Pages/VendorAdmin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='vendor-admin-dashboard' element={<VendorAdmin/>}>

      </Route>
    </Route>

  )
)

function App() {
  return (
    <RouterProvider router= {router}/>
  );
}

export default App;
