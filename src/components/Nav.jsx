import "./font.css"
import { FiUser } from "react-icons/fi";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { LiaSubwaySolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { logAtom } from "../atoms/IsLogin";


export default function Nav() {

  const [login, setLogin] = useAtom(logAtom);

  const handlelogout = () => {
    setLogin(false);
    localStorage.clear();
  };

  return (
    <div className="w-full flex justify-between items-center mx-10 text-gray-700">
        <h2 id="title" className="text-3xl text-gray-800 font-bold">BUSAN <br/> <span className="text-2xl">지하철 실내공기정보</span></h2>
        <div className="flex justify-center items-center">
    
          {login &&
            <Link to="/subway" id="navcenter"
              className="inline-flex items-center justify-center text-lg font-bold text-gray-700
                mr-5 px-5 py-1 w-36 text-center hover:underline underline-offset-4">
              <LiaSubwaySolid className="w-8"/>지하철
            </Link>}

          </div>
          <div className="flex justify-end items-center">
            <Link to="/"
                      className="inline-flex items-center justify-center w-8 mr-3 text-gray-700
                      ">
                      <FiUser className="w-full h-full"/>
            </Link>
            {login ? (
            <>
            <Link to="/login"
              onClick={handlelogout}
              className="inline-flex items-center justify-center w-8 mr-5 text-gray-700">
                <RiLogoutCircleLine className="w-full h-full"/>
            </Link>
            </>
                      ) : (
                        <Link to="/login" className="inline-flex items-center justify-center w-8 mr-5 text-gray-700
                        ">
                        <RiLoginCircleLine className="w-full h-full"/>
                        </Link>
                      )}
        </div>
    </div>
  )
}
