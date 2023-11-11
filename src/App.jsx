
import './App.css'
import Home from './components/Home/Home'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login/Login'
function App() {

  return (
    <>
        <Routes>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
    </>
  )
}

export default App
