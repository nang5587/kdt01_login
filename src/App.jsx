import "../src/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Nav from "./components/Nav"
import Subway from "./components/Subway"
import Home from "./components/Home"
import TodoList from "./components/TodoList"

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat">
        
        {/* 상단 바 */}
        <header id="headcolor" className="w-full px-4 py-4 shadow-sm">
          <Nav />
        </header>
      
        {/* 메인 화면 */}
        <main id="maincolor" className="flex-1 w-full flex flex-col items-center justify-start px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/subway" element={<Subway />} />
            <Route path="/todoList" element={<TodoList />} />
          </Routes>
        </main>
        
        {/* 하단 바 */}
        <footer id="footcolor" className="w-full py-4 flex justify-center items-center bg-gray-50 text-sm sm:text-base">
          <h2 id="kakaoNomal" className="text-gray-700">Kdt01 React Login Form</h2>
        </footer>
        
      </div>
    </BrowserRouter>
  )
}

export default App
