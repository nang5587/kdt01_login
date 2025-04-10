import { useAtom } from "jotai"
import { logAtom } from "../atoms/IsLogin"
import { useEffect } from "react";
import Login from "./Login"
import train from "../assets/train.png"

export default function Home() {
  const [login, setLogin] = useAtom(logAtom);

  useEffect(()=>{
    if (localStorage.getItem("email")) setLogin(true) ;
  }, []);


  return (
  <div className="w-full flex justify-end items-center">
    <div className="w-full">
      {login ? (
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl w-[350px] h-[150px] flex items-center justify-center text-center
                        hover:shadow-xl transition-shadow duration-300 ease-in-out mt-10 animate-fade-up">
          <h2 id="kakaoNomal" className="text-xl text-gray-700 leading-relaxed font-bold">
            안녕하세요, <br />
            <span className="text-blue-500">
              {localStorage.getItem('logEmail')}
            </span>
            님!
          </h2>

          
        </div>


        <div className="flex w-full justify-start p-10">
          <div className="w-full  overflow-hidden">
            <img id="animate-marquee" className="w-1/4" src={train} />
          </div>
        </div>
      </div>
      ) : (
        <Login />
      )}
    </div>
  </div>
  )
}
