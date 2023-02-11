import theme        from "../theme"
import { Box }      from '@mui/material'
import { Header }   from '../components'
import { DataGrid } from "@mui/x-data-grid"
import { useGetCustomersQuery } from '../api/apiSlice'

const Customers = () => {
    const { 
        data: customers,
        isLoading,
        isSuccess,
        isError,
        error 
    } = useGetCustomersQuery()
    const items = customers?.resp
    console.log("C ", items)

    const columns = [
        { field: "id",          headerName: "ID",       flex: 0.5 },
        { field: "username",    headerName: "Name",     flex: 1 },
        { field: "email",       headerName: "Email",    flex: 1 },
        /*  { field: "phoneNumber", headerName: "Phone Number", flex: 0.5,
                renderCell: (params) => {return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3") }
            }, */
        { field: "role",        headerName: "Role",     flex: 0.5 }
    ]

    return ( 
        <Box m="1.5rem 2.5rem">
            <Header title="CUSTOMERS" subtitle="List of Customers" />
            <Box mt="40px" height="75vh"
                sx={{
                    "& .MuiDataGrid-root": { border: "none" },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                    "& .MuiDataGrid-columnHeaders": { backgroundColor: theme.palette.bgColor.main, color: theme.palette.lightText.main, borderBottom: "none" },
                    "& .MuiDataGrid-virtualScroller": { backgroundColor: theme.palette.color_01.main },
                    "& .MuiDataGrid-footerContainer": { backgroundColor: theme.palette.bgColor.main, color: theme.palette.lightText.main, borderTop: "none" },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${theme.palette.lightText.main} !important` },
                }}
            >
            <DataGrid
                loading={ isLoading || !items }
                getRowId={ (row) => row.id }
                rows={ items || [] }
                columns={ columns }
                sx={{ backgroundColor: theme.palette.bgColor.main, color: theme.palette.lightText.main }}
            />
            </Box>
        </Box>
    )
}

export default Customers
