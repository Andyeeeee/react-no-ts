import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>router</h1>
          <Link to="/">第一頁</Link>
          <Link to="Page2">，第二頁</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

//path = '/' === index

export default App
