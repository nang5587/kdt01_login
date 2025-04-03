import TailButton from "../UI/TailButton"
import { logAtom } from "../atoms/IsLogin"
export default function Nav() {
  return (
    <div className="w-full flex justify-between items-center mx-10">
        <h2 className="text-3xl text-gray-600 font-bold">Kdt01</h2>
        <div className="w-20 mt-5">
        {logAtom && <TailButton 
                    caption="로그인"
                    color="lblue"
                    onClick={()=>{}}
                    />}
        {!logAtom && <TailButton 
        caption="로그아웃"
        color="lblue"
        onClick={()=>{}}
        />}
        </div>
    </div>
  )
}
