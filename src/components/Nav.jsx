import TailButton from "../UI/TailButton"
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { logAtom } from "../atoms/IsLogin";

export default function Nav() {
  const [login, setLogin] = useAtom(logAtom);

  const handlelog = () => {
    setLogin(false);
  };

  return (
    <div className="w-full flex justify-between items-center mx-10">
        <h2 className="text-3xl text-gray-600 font-bold">Kdt01</h2>
        <Link to="/">Home</Link>
        {login ? (
          <>
          <Link to="/subway" className="mr-4">지하철대기정보</Link>
          <TailButton 
                    caption="로그아웃"
                    color="lblue"
                    onClick={handlelog}
                    />
                    </>
                    ) : (
                      <Link to="/login">Login</Link>
                    )}
    </div>
  )
}
