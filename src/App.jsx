import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FullPage from './FullPage'
import MenuBar from './Components/Home/MenuBar'
import MainContent from './Components/Home/MainContent'
import Courses from './Components/CourseMentor.jsx/Courses'
import Mentors from './Components/CourseMentor.jsx/Mentors'
import About from './Components/About/About'
import Register from './Components/Footer/Register'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<FullPage />}>
            <Route element={<MainContent />} index></Route>
            <Route element={<Courses />} path='Courses'></Route>
            <Route element={<About />} path='About'></Route>
            <Route element={<MainContent />} path='MainContent'></Route>
            <Route element={<Register />} path='Register'></Route>
            <Route element={<MainContent />} path='Register'></Route>
            <Route element={<Mentors />} path='Mentors'></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;