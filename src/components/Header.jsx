import theme  from "../theme"
import { Box, Typography }  from "@mui/material"

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: "5px" }}
        color={theme.palette.lightText.main}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={ theme.palette.blueText.main }>
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header
