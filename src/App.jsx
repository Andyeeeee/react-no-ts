import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import './App.css'

//page
import Page1 from './pages/page1'
import Page2 from './pages/page2'


//layout
import RootLayout from './lyaouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Page1 />} />
      <Route path='page2' element={<Page2 />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

//path = '/' === index

export default App
