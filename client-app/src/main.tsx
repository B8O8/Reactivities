import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'react-calendar/dist/Calendar.css'
import './app/layout/styles.css'
import { StoreContext, store } from './app/stores/store'
import { router } from './app/router/Routes'


ReactDom.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </StrictMode>,
)
