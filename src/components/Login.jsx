
import TailButton from "../UI/TailButton"
import { useRef, useState } from "react"
import { useAtom } from "jotai";
import { logAtom } from "../atoms/IsLogin";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [log, setLog] = useAtom(logAtom);
    const navigate = useNavigate();
    const emailref = useRef();
    const passref = useRef();
    const handleSubmit = () => {
        localStorage.setItem('logEmail', emailref.current.value);
        localStorage.setItem('logPass', passref.current.value);
        setLog(true);
    };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* 이미지 */}
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
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
                  focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
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
                   focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
            </div>

            <div>
                <TailButton 
                    caption="Sign in"
                    color="blue"
                    onClick={handleSubmit}
                />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
