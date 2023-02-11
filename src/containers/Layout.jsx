import { Outlet }   from 'react-router-dom'
import { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Navbar, Sidebar }    from "../components"
import { useGetUserQuery }    from '../api/apiSlice'


const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const userId = 1  //useSelector((state) => state.global.userId)
  const { data } = useGetUserQuery(userId)
  const user = data?.resp[0]
  console.log("🚀 → file: Layout.jsx:13 → Layout → USER", user)

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={user || {}}
        isNonMobile={isNonMobile}
        drawerWidth={isNonMobile ? "250px" : "80%" }
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={user || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
