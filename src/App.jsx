import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Nav from "./components/Nav"
import Subway from "./components/Subway"
import Home from "./components/Home"
import { logAtom } from "./atoms/IsLogin"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAtom } from "jotai"
function App() {
  const [login] = useAtom(logAtom);
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   navigate("/home?item=log");
  // }, [logAtom]);

  return (
    <BrowserRouter>
      <div className="w-full xl:w-9/10 h-screen mx-auto flex flex-col">
        <header className="w-full min-h-30 bg-amber-50 flex justify-center items-center
                          px-10">
          <Nav />
        </header>
        <main className="w-full h-full flex flex-col justify-start items-center my-10">
          {/* <Subway /> */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            {login && <Route path="/subway" element={<Subway />} />}
          </Routes>
        </main>
        <footer className="w-full h-20 flex justify-center items-center">
          <h2 className="text-md">Kdt01 react login form</h2>
        </footer>
      </div>
      </BrowserRouter>
  )
}

export default App
