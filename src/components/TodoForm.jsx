import TailSelect from "../UI/TailSelect"
import TailButton from "../UI/TailButton";
import { useRef, useEffect } from "react";

export default function TodoForm({addTodo}) {
  //ref를 사용하여 입력된 완료 여부와 내용을 가져옴
  const refsel = useRef();
  const contentref = useRef();

  //완료 여부를 나타내는 X, O를 배열로 선언
  const sel = ["X", "O"];

  //"확인" 버튼 클릭 시 완료 여부와 내용을 가져와서 addTodo 함수에 전달함
  const handleClick = () => {
    //내용이 비었을 경우 처리
    if(contentref.current.value == ""){
        alert("내용을 입력해주세요.");
        contentref.current.focus();
        return;
    }
    //완료 여부와 내용을 변수에 저장
    const content = contentref.current.value;
    const sel = refsel.current.value;
    //내용을 비워줌
    contentref.current.value = "";
    //함수 호출
    addTodo(content, sel);
  }

  //"취소" 버튼 클릭 시 완료 여부를 X로 바꾸고 내용을 비워줌
  const handleRemove = (e) => {
    e.preventDefault();
    refsel.current.value = "X";
    contentref.current.value = "";
  }

  //엔터키 눌렀을 때 확인버튼 함수 호출
  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      handleClick();
    }
  }

  //랜더링 시 완료 여부를 X로 초기화
  useEffect(()=>{
    refsel.current.value = sel[0];
  },[]);

  return (
    <div className="w-11/12 flex flex-col justify-center items-center py-5 ">
      <h2 className="text-2xl text-gray-700 text-center mb-10 font-bold">TODO LIST</h2>
      <div className="w-1/2 flex justify-center items-center">
        <div id="kakaoNomal" className="w-1/5 mr-10">
        {/* 완료 여부 선택 */}
        <TailSelect
        id = "todoSelect"
        refSel = {refsel}
        items = {sel}
        handleChange = {() => {}}
        />
        </div>

        {/* 내용 입력 */}
        <input
            ref={contentref}
            id="content"
            name="content"
            type="text"
            onKeyDown={handleKeyDown}
            required
            className="block w-2/5 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 
            focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 focus:bg-white mr-10"/>

        {/* 확인 버튼 클릭 시 완료 여부와 내용을 가져가서 addTodo 함수에 전달 */}
        <div id="kakaoNomal" className="mr-10 w-1/5">    
        <TailButton 
        caption="확인"
        color="lblue"
        onClick={handleClick}
        />
        </div>

        {/* 취소 버튼 클릭 시 완료 여부를 X로 바꾸고 내용을 비워줌 */}
        <div id="kakaoNomal" className="w-1/5">
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

