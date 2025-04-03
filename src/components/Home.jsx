import { useAtom } from "jotai"
import { logAtom } from "../atoms/IsLogin"
import Login from "./Login"

export default function Home() {
  const [login] = useAtom(logAtom);

  return (
    <div className="w-full flex justify-center items-center">
      {login ? <h2 className="text-2xl">{localStorage.getItem('logEmail')}님이 로그인되었습니다.</h2> : <Login />}
    </div>
  )
}
