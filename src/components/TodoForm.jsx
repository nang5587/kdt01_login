import TailSelect from "../UI/TailSelect"
import TailButton from "../UI/TailButton";
import { useRef, useEffect } from "react";

export default function TodoForm({addTodo}) {
    const refsel = useRef();
    const contentref = useRef();
    const sel = ["X", "O"];

    const handleClick = () => {
        if(contentref.current.value == ""){
            alert("내용을 입력해주세요.");
            contentref.current.focus();
            return;
        }
        const content = contentref.current.value;
        const sel = refsel.current.value;
        contentref.current.value = "";
        console.log("content", content);
        console.log("sel", sel);
        addTodo(content, sel);
    }
    const handleRemove = () => {
        refsel.current.value = "X";
        contentref.current.value = "";
    }

    useEffect(()=>{
        refsel.current.value = sel[0];
    },[]);

  return (
    <div className="w-11/12 flex flex-col justify-center items-center bg-gray-50 rounded-2xl py-10 shadow-md shadow-gray-300 border-1 border-gray-200">
      <h2 className="text-2xl text-gray-700 text-center mb-10 font-bold">Todo List</h2>
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-1/5 mr-10">
        <TailSelect
        id = "todoSelect"
        refSel = {refsel}
        items = {sel}
        handleChange = {() => {}}
        />
        </div>
        <input
            ref={contentref}
            id="content"
            name="content"
            type="text"
            required
            className="block w-2/5 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 
            focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 focus:bg-white mr-10"/>

        <div className="mr-10 w-1/5">    
        <TailButton 
        caption="확인"
        color="lblue"
        onClick={handleClick}
        />
        </div>
        <div className="w-1/5">
        <TailButton 
        caption="취소"
        color="lblue"
        onClick={handleRemove}
        />
        </div>
        </div>
    </div>
  )
}

