import "../src/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Nav from "./components/Nav"
import Subway from "./components/Subway"
import Home from "./components/Home"
import { logAtom } from "./atoms/IsLogin"
import { useAtom } from "jotai"
function App() {
  const [login] = useAtom(logAtom);

  return (
    <BrowserRouter>
      <div className="w-full xl:w-9/10 h-screen mx-auto flex flex-col">
        <header id="headcolor" className="w-full min-h-30 flex justify-center items-center
                          px-10">
          <Nav />
        </header>
        <main id="maincolor" className="w-full h-full flex flex-col justify-start items-center">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            {login && <Route path="/subway" element={<Subway />} />}
          </Routes>
        </main>
        <footer id="footcolor" className="w-full h-20  flex justify-center items-center">
          <h2 className="text-md text-gray-700">Kdt01 react login form</h2>
        </footer>
      </div>
      </BrowserRouter>
  )
}

export default App
