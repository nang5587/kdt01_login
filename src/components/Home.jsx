import { useAtom } from "jotai"
import { logAtom } from "../atoms/IsLogin"
import Login from "./Login"

export default function Home() {
  const [login] = useAtom(logAtom);

  return (
  <div className="w-full flex justify-end items-center">
    <div className="w-full">
      {login ? (
      <div className="bg-white border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl w-[350px] h-[150px] flex items-center justify-center text-center
                      hover:shadow-xl transition-shadow duration-300 ease-in-out mt-10 ml-20">
        <h2 className="text-xl text-gray-700 leading-relaxed font-bold">
          안녕하세요, <br />
          <span className="text-blue-500">
            {localStorage.getItem('logEmail')}
          </span>
          님!
        </h2>
      </div>
      ) : (
        <Login />
      )}
    </div>
  </div>
  )
}
