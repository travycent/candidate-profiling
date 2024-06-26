import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import EditUser from "./components/EditUser";
// import AddUser from "./components/AddUser";
// import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
