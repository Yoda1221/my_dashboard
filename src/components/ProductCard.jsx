import theme                from "../theme"
import { useState }         from "react"
import { TYPES, COMPLEX }   from "../config"
import { Card, CardActions, CardContent, Collapse, Button, Typography, Rating, Grid } from "@mui/material"

const ProductCard = (data) => {
    const item = data.data
    const [isExpanded, setIsExpanded] = useState(false)

    return (
    <Card
      sx={{
        borderRadius: "0.55rem",
        backgroundImage: "none",
        backgroundColor: theme.palette.bgColor.main,
        border: `1px solid ${theme.palette.blueText.main}`
      }}
    >
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color={theme.palette.blueText.main} gutterBottom>
                {TYPES[item.type].value}
            </Typography>
            <Typography color={theme.palette.lightText.main} variant="h6" component="div">
                {item.name}
            </Typography>
            <Rating value={Number(25)} readOnly />
            <Typography color={theme.palette.blueText.main} variant="body2">
                {item.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" sx={{}} size="small" onClick={() => setIsExpanded(!isExpanded)} >
                {isExpanded ? "See Less" : "See More" }
            </Button>
        </CardActions>
        <Collapse
            in={isExpanded}
            timeout="auto"
            unmountOnExit
            sx={{color: "rgba(221,224,228,1)"}}
        >
            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                        <Typography sx={{ fontSize: "0.8rem" }}>Sütési hőfok:</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography style={{ fontSize: "0.8rem", color: theme.palette.blueText.main }}>{item.temperature}°C</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{ fontSize: "0.8rem" }}>
                            Cooking time: 
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: "0.8rem", color: theme.palette.blueText.main }}>
                            {item.completionTime}min
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{ fontSize: "0.8rem" }}>
                        Complexity: 
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: "0.8rem", color: theme.palette.blueText.main }}>
                        {COMPLEX[item.difficulty]}
                        </Typography>
                    </Grid>
                    {/* 
                        //  TODO    elkészítés
                        //  TODO    hozzávalók
                    */}
                </Grid>
            </CardContent>
        </Collapse>
    </Card>
  )

}

export default ProductCard
