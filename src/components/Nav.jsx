import "./font.css"
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { logAtom } from "../atoms/IsLogin";
import user from "../assets/user2.png"


export default function Nav() {

  const [login, setLogin] = useAtom(logAtom);

  const handlelogout = () => {
    setLogin(false);
    localStorage.clear();
  };

  return (
    <div className="w-full flex justify-between items-center mx-10 text-gray-700">
        <h2 id="title" className="text-3xl text-gray-700 font-bold">부산 지하철 실내공기정보</h2>
        <div className="flex justify-center items-center">
    
          {login &&
            <Link to="/subway" id="navcenter"
              className="inline-flex items-center justify-center text-lg font-bold text-gray-700
                mr-5 px-5 py-1  w-28 text-center hover:underline underline-offset-2">
              지하철
            </Link>}

          </div>
          <div className="flex justify-end items-center">
            <Link to="/"
                      className="inline-flex items-center justify-center w-9 mr-5">
                        <img src={user} />
            </Link>
            {login ? (
            <>
            <Link to="/login"
              onClick={handlelogout}
              className="inline-flex items-center justify-center font-bold text-gray-700
               bg-white px-5 py-1 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] w-28 text-center">
                Logout
            </Link>
            </>
                      ) : (
                        <Link to="/login"
                        className="inline-flex items-center justify-center font-bold text-gray-700
                         bg-white px-5 py-1 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] w-28 text-center">
                          Login
                        </Link>
                      )}
        </div>
    </div>
  )
}
