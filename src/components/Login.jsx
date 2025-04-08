import "./font.css"
import TailButton from "../UI/TailButton"
import { useAtom } from "jotai";
import { useRef } from "react";
import { logAtom } from "../atoms/IsLogin";
import { useNavigate } from "react-router-dom";
import train from "../assets/subway.png"
export default function Login() {
    const [login, setLogin] = useAtom(logAtom);
    const navigate = useNavigate();
    const emailref = useRef();
    const passref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(emailref.current.value == ""){
      alert("이메일을 입력해주세요.");
      emailref.current.focus();
      return;
    }
    if(passref.current.value == ""){
      alert("패스워드를 입력해주세요.");
      passref.current.focus();
      return;
    }

    localStorage.setItem('logEmail', emailref.current.value);
    localStorage.setItem('logPass', passref.current.value);
    setLogin(true);
    navigate("/");
  };

  return (

      <div className="flex w-full justify-start px-6 py-5 lg:px-8 mt-30">
        <div className="w-1/2 h-auto mt-10 flex justify-center items-center">
          <img src={train} id="rotated" className="w-4/5 ml-20"/>
        </div>

        <div className=" w-1/2 h-auto flex justify-center items-center">
          <form className="w-1/2 space-y-6 bg-white border-1 border-gray-200 shadow-md shadow-gray-300 rounded-2xl px-10 pt-10 pb-20 animate-fade-up" 
                onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mt-5 mb-10 text-gray-700">Login</h2>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-bold text-gray-700">
                이메일
              </label>
              <div className="mt-2">
                <input
                  ref={emailref}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 
                  focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 focus:bg-white"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-bold text-gray-700">
                  패스워드
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={passref}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                   focus:outline-indigo-600 sm:text-sm/6 focus:bg-white"/>
              </div>
            </div>

            <div>
                <TailButton 
                    caption="Login"
                    color="lblue"
                    onClick={handleSubmit}
                />
            </div>
          </form>
        </div>
      </div>

  )
}
