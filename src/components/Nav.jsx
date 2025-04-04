import TailButton from "../UI/TailButton"
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { logAtom } from "../atoms/IsLogin";


export default function Nav() {

  const [login, setLogin] = useAtom(logAtom);

  const handlelogout = () => {
    setLogin(false);
    localStorage.clear();
  };

  // const handlelog = () => {
  //   navigate("/login");
  // }

  return (
    <div className="w-full flex justify-between items-center mx-10">
        <h2 className="text-3xl text-gray-600 font-bold">Kdt01</h2>
        <Link to="/">Home</Link>
        {login ? (
          <>
          <Link to="/subway" className="mr-4">Subway</Link>
          <Link to="/login" className="mr-4" onClick={handlelogout}>logout</Link>

                    </>
                    ) : (
                      <Link to="/login">Login</Link>
                    )}
    </div>
  )
}
