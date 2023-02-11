import { useState }     from "react"
import { FlexBetween }  from '../utils'
import { ROLE }         from "../config"
import profileImage     from "../assets/FB.png"
import { Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined }  from "@mui/icons-material"
import { AppBar, Button, Box, Typography, IconButton, InputBase, Toolbar, Menu, MenuItem }  from "@mui/material"

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const isOpen      = Boolean(anchorEl)
  const handleClose = ()  => setAnchorEl(null)
  const handleClick = (e) => setAnchorEl(e.currentTarget)

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }} >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={ () => setIsSidebarOpen(!isSidebarOpen)}  style={{color: "rgba(114,175,250,1)"}}>
            <MenuIcon />
          </IconButton>
          <FlexBetween style={{backgroundColor: "rgba(29,33,36,1)", borderRadius: "9px", padding: "0.1rem 1.5rem"}} >
            <InputBase placeholder="Search..." style={{color: "rgba(114,175,250,1)"}} />
            <IconButton>
              <Search style={{color: "rgba(114,175,250,1)"}} />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween style={{gap: "1.5rem"}}>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} style={{color: "rgba(114,175,250,1)"}} />
          </IconButton>
          <FlexBetween style={{gap: "1.5rem"}}>
            <Button
              onClick={handleClick}
              sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "none", gap: "1rem" }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: "rgba(114,175,250,1)" }}
                >
                  { user.username }
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: "rgba(114,175,250,1)" }}
                >
                  { ROLE[user.role] }
                </Typography>
              </Box>
              <ArrowDropDownOutlined sx={{ color: "rgba(114,175,250,1)", fontSize: "25px" }}/>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
