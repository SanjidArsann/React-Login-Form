
import './App.css'
import Home from './components/Home/Home'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login/Login'
function App() {

  return (
    <>
        <Routes>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
    </>
  )
}

export default App
