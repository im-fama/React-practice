import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/posts"    element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
