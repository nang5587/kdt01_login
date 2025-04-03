
import { logAtom } from "../atoms/IsLogin"
export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      {logAtom && `${localStorage.getItem('logEmail')}님이 로그인되었습니다.`}
    </div>
  )
}
