import theme        from "../theme"
import { Box }      from '@mui/material'
import { Header }   from '../components'
import { geodata }  from "../api/geodata"
import { ResponsiveChoropleth } from '@nivo/geo'
import { useGetGeographyQuery } from '../api/apiSlice'

const Geography = () => {
    let content
    const { 
        data: geography,
        isLoading,
        isSuccess,
        isError,
        error 
    } = useGetGeographyQuery()
    const items = geography
    console.log("C ", items)

    if (isLoading)  content = <p className="loading">Loading...</p>
    if (isSuccess)  content = <ResponsiveChoropleth
        data={items}
        theme={{
            axis: {
                domain: {
                line: {
                    stroke: theme.palette.blueText.main,
                },
                },
                legend: {
                text: {
                    fill: theme.palette.blueText.main,
                },
                },
                ticks: {
                line: {
                    stroke: theme.palette.blueText.main,
                    strokeWidth: 1,
                },
                text: {
                    fill: theme.palette.blueText.main,
                },
                },
            },
            legends: {
                text: {
                    fill: "white",
                },
            },
            tooltip: {
                container: {
                    color: theme.palette.greenText.main,
                },
            },
        }}
        features={geodata.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 80 }}
        colors="spectral"
        domain={[0, 60]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={150}
        projectionTranslation={[0.45, 0.6]}
        projectionRotation={[0, 0, 0]}
        borderWidth={1.3}
        borderColor={ theme.palette.color_01.main }
        legends={ [ {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: -61,
            translateY: -11,
            itemsSpacing: 1,
            itemWidth: 71,
            itemHeight: 15,
            itemDirection: "left-to-right",
            itemTextColor: theme.palette.blueText.main,
            itemOpacity: 0.85,
            symbolSize: 13,
            effects: [{
                on: "hover",
                style: {
                    itemTextColor: theme.palette.lightText.main,
                    itemOpacity: 1
                }
            }]
        } ] }
    />
    else if(isError) content = <p>{ error }</p>

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
            <Box
                mt="20px"
                height="75vh"
                width="100%"
                border={`1px solid ${theme.palette.blueText.main}`}
                borderRadius="5px"
            >
                { content }
            </Box>
        </Box>
    )
}

export default Geography
