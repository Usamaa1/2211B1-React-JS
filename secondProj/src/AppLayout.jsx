import React from 'react'
import { Outlet } from 'react-router'
import BootstrapNav from './bootstrapNav'


export default function AppLayout() {
  return <>

  <BootstrapNav></BootstrapNav>
  <Outlet></Outlet>
  
  <footer>Copyright @2025</footer>
  
  </>
}
