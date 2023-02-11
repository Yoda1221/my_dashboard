import { FlexBetween }              from '../utils'
import { useEffect, useState }      from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"
import { ChevronLeft, ChevronRightOutlined, HomeOutlined, ShoppingCartOutlined,
  Groups2Outlined, ReceiptLongOutlined, PublicOutlined, PointOfSaleOutlined,
  TodayOutlined, CalendarMonthOutlined, AdminPanelSettingsOutlined, TrendingUpOutlined,
  PieChartOutlined } from "@mui/icons-material";

const navItems = [
  { text: "Dashboard",      icon: <HomeOutlined />, },
  { text: "Client Facing",  icon: null, },
  { text: "Products",       icon: <ShoppingCartOutlined />, },
  { text: "Customers",      icon: <Groups2Outlined />, },
  { text: "Transactions",   icon: <ReceiptLongOutlined />, },
  { text: "Geography",      icon: <PublicOutlined />, },
  { text: "Sales",          icon: null, },
  { text: "Overview",       icon: <PointOfSaleOutlined />, },
  { text: "Daily",          icon: <TodayOutlined />, },
  { text: "Monthly",        icon: <CalendarMonthOutlined />, },
  { text: "Breakdown",      icon: <PieChartOutlined />, },
  { text: "Management",     icon: null, },
  { text: "Admin",          icon: <AdminPanelSettingsOutlined />, },
  { text: "Performance",    icon: <TrendingUpOutlined />, }
]

const Sidebar = ({
  drawerWidth,
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  const [active, setActive] = useState("")
  const { pathname }        = useLocation()
  const navigate            = useNavigate()

  useEffect(() => {
    setActive(pathname.substring(1))
  }, [pathname])

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: "rgba(56,201,88,1)",
              backgroundColor: "rgba(29,33,36,1)",
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={"rgba(114,175,250,1)"}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h4" fontWeight="bold">
                    Dashboard
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft style={{ color: "rgba(114,175,250,1)"}}/>
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "1rem 0 0 2rem" }}>
                      {text.toUpperCase()}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase()

                return (
                  <ListItem key={text} disablePadding >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`)
                        setActive(lcText)
                      }}
                      sx={{
                        backgroundColor: active === lcText ? "rgba(33,37,40,1)" : "transparent",
                        color: active === lcText ? "rgba(221,224,228,1)" : "rgba(56,201,88,1)",
                      }}
                       
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color: active === lcText ? "rgba(221,224,228,1)" : "rgba(56,201,88,1)",
                        }}
                        style={{ fontWeight: 100 }}
                      >
                        {icon}
                      </ListItemIcon>
                      <span style={{ fontWeight: 100 }}>
                        {text}
                      </span>
                      {active === lcText && ( <ChevronRightOutlined sx={{ ml: "auto" }} /> )}
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
