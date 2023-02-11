import React  from 'react'
import App    from './App'
import { Provider }   from 'react-redux'
import { api }        from './api/apiSlice'
import { createRoot } from 'react-dom/client'
import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './sass/style.scss'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
})
setupListeners(store.dispatch)

createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/*' element={ <App /> } />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
