import React from 'react'
import { Navbar, Footer, TalkSection } from './components'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <TalkSection />
      <Footer />
    </>
  )
}

export default App