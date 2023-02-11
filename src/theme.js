import { createTheme } from '@mui/material/styles'
// MUI THEME SETTINGS
const theme = createTheme({
        palette: {
            color_01:   { main: "rgba(33,37,40,1)" },
            lightText:  { main: "rgba(221,224,228,1)" },
            blueText:   { main: "rgba(114,175,250,1)" },
            greenText:  { main: "rgba(56,201,88,1)" },
            bgColor:    { main: "rgba(29,33,36,1)"}
        },
        typography: {
            fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 12, fontWeight: 100,
            h1: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 14,
                fontWeight: 100
            },
        }
})

export default theme
