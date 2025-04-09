import TailButton from "../UI/TailButton"
import { useRef } from "react";

export default function TodoItem({id, text, completed, handleDelete, handleToggle}) {
    const idref = useRef();
    let isUpdate = false;
    if(completed == "X"){
        isUpdate = false;
    }
    if(completed == "O"){
        isUpdate = true;
    }
    const handleClick = () => {
        const id = idref.current.value;
        if(id == ""){
            alert("삭제할 항목을 선택해주세요.");
            return;
        }
        console.log("id", id);
        handleDelete(id);
        alert("삭제되었습니다.");
    }
    const handleSel = () => {
        

        handleToggle(idref.current.value);
    }

  return (
    <div className="w-full flex items-center justify-between ps-4 border border-gray-200 rounded-2xl bg-white mb-3">
        <div className="w-4/5 flex justify-start items-center">
            {isUpdate ? 
            (
            <div>
                <input id="bordered-radio-1" type="checkbox" value={id} name="bordered-radio" ref={idref} onClick={handleSel} checked
                className="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                <label for="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-sky-600 line-through">{text}</label>
            </div>) : 
            (
            <div>
                <input id="bordered-radio-1" type="checkbox" value={id} name="bordered-radio" ref={idref} onClick={handleSel}
                className="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                <label for="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">{text}</label>
            </div>)}
        </div>
        <div className="w-1/5 p-3 inline-flex justify-end items-center">
            <p className="w-1/3">
                <TailButton
                caption="삭제"
                color="lblue"
                onClick={handleClick}
                />
            </p>
        </div>
    </div>
  )
}
