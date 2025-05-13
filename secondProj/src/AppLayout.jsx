import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import BootstrapNav from './bootstrapNav'
import LoadingPage from './LoadingPage'
import ContextProvider from './contextAPI/context'


export default function AppLayout() {
  return <>



  <BootstrapNav></BootstrapNav>
  <Suspense fallback={<LoadingPage/>}>

  <Outlet></Outlet>

  
  </Suspense>
  <footer>Copyright @2025</footer>

  
  </>
}
