import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'

import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const isNonMobile = useMediaQuery('(min-width: 600px)')

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth='250px'
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
