import { Box, useMediaQuery }   from "@mui/material"
import { Header, ProductCard }  from "../components" 
import { useGetProductsQuery }  from "../api/apiSlice" 

const Products = ({  }) => {
    const { 
        data,
        isLoading,
        isSuccess,
        isError,
        error 
    } = useGetProductsQuery()
    const isNonMobile = useMediaQuery("(min-width: 1000px)")
    
    return (
        <Box m="1.5rem 2.5rem">
          <Header title="PRODUCTS" subtitle="See your list of products." />
          {data || !isLoading ? (
            <Box
              mt="20px"
              rowGap="20px"
              display="grid"
              columnGap="1.33%"
              justifyContent="space-between"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
            >
              {data && data?.resp.map(item => {
                  return <ProductCard key={item.id} data={item} />
                }
              )}
            </Box>
          ) : (
            <Box>Loading...</Box>
          )}
        </Box>
      )
}

export default Products
