import theme      from './theme'
import { Layout } from './containers'
import { ThemeProvider }  from '@mui/material/styles'
import { Routes, Route, Navigate }  from 'react-router-dom'
import { Customers, Home, Products, NotFound, Transactions, Geography }  from './pages'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="/dashboard"    element={<Navigate to="/" replace />} />
          <Route path="/products"     element={<Products/>} />
          <Route path="/customers"    element={<Customers/>} />
          <Route path="/geography"    element={<Geography/>} />
          <Route path="/transactions" element={<Transactions/>} />

          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
