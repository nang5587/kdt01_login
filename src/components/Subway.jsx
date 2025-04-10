import TailSelect from "../UI/TailSelect"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useAtom } from "jotai"
import { logAtom } from "../atoms/IsLogin"
import scode from "../db/scode.json"
import sarea from "../db/sarea.json"
export default function Subway() {
  //전역변수로 로그인 관리
  const [login] = useAtom(logAtom);

  //useNavigate 변수 선언
  const navigate = useNavigate();

  //로그인 시 홈으로 이동
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  //useState 변수 선언
  const [tags, setTags] = useState([]);
  const [tags1, setTags1] = useState([]);
  const [data, setData] = useState([]);
  const [code, setCode] = useState();

  //useRef 변수 선언
  const refSel = useRef();

  //측정소 리스트 만들기
  const selList = sarea.map(item => item["측정소"]);

  //어제 날짜 구하는 함수
  const getYesterday = () => {
    let dt = new Date();
    dt.setDate(dt.getDate() - 1);

    //년도
    let year = String(dt.getFullYear());
    year = year.slice(2);
    //월
    let month = String(dt.getMonth() + 1).padStart(2, '0');
    // month = month < 10 ? '0' + month : month ;

    //일 
    let day = String(dt.getDate()).padStart(2, '0');
    
    return (year +  month + day);
  }

  //API 데이터 가져오는 함수
  const getFetchData = async () => {
      const apiKey = import.meta.env.VITE_APP_API_KEY;

      let url = "https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=";
      url = `${url}${apiKey}&pageNo=1&numOfRows=104&resultType=json&controlnumber=${getYesterday()}10`
      const resp = await fetch(url);
      const data = await resp.json();
    
      let subwayData = data.response.body.items.item;
      setData(subwayData);
  }

  //측정소 선택 시 테이블 뿌리게 하는 함수
  const handleChange = () => {
      const selected = refSel.current.value;

      //측정소와 코드가 함께 있는 배열을 만들고, 선택한 측정소에 해당하는 코드를 찾음
      const codes = sarea.map(item => `${item["측정소"]},${item["코드"]}`);
      const test = codes.find(item => item.split(',')[0] === selected) || "";
      const selectedCode = test.split(',')[1] || "";
    
      setCode(selectedCode);

      //측정소 코드에 해당하는 데이터를 필터링하여 새로운 배열 생성
      const data2 = data.filter(item => item.areaIndex === selectedCode);
      
      const tm = data2.map(item => 
          <tr key={item}
          className="bg-white border-b border-gray-200
                  hover:bg-gray-50 hover:cursor-pointer hover:font-bold" >

            <td className="px-6 p-4 text-center">
            {item["pm10"]}
            </td>
            <td className=" px-6 py-4 text-center ">
            {item["co2"]}
            </td>
            <td className=" px-6 py-4 text-center">
            {item["co"]}
            </td>
            <td className=" px-6 py-4 text-center">
            {item["no2"]}
            </td>
            <td className=" px-6 py-4 text-center">
            {item["no"]}
            </td>
            <td className=" px-6 py-4 text-center">
            {item["nox"]}
            </td>
            <td className=" px-6 py-4 text-center">
            {item["o3"]}
            </td>
            <td className=" px-6 py-4 text-center">
            {item["pm25"]}
            </td>
            <td className=" px-6 py-4 text-center">
            {item["fad"]}
            </td>
            </tr>);
      setTags(tm);
  }

  //화면 랜더링 시 데이터를 가져오고 로그인 상태를 확인하여 새로고침 시에도 로그인 유지
  useEffect(()=>{
      getFetchData();
      if (localStorage.getItem("email") != "") setLogin(true) ;
    }, []);
  
  //테이블의 헤더를 만들기 위함
  useEffect(()=>{
    if(!data) return;
    const itemKeys = Object.keys(scode);

    let tm = itemKeys.map(item => 
          <th key={item} className="font-bold px-6 py-3 text-center w-1/9">
          {scode[item]["name"]}<br/>({scode[item]["unit"]})
          </th>
    )
    setTags1(tm)
    handleChange();
  }, [data]);

  return (
    <div className="w-9/10">
        <div className="w-full flex justify-between items-center">
            <h2 id="kakaoMid" className="text-lg text-gray-700 font-bold my-10 px-5 py-2 rounded-lg bg-white
                          border-1 border-gray-100 shadow-md shadow-gray-300">측정소 선택</h2>
            <div id="kakaoNomal" className="w-1/3"><TailSelect 
                id="sel"
                refSel={refSel}
                items={selList}
                handleChange={handleChange}
            />
            </div>
        </div>
        <table id="kakaoNomal" className="w-full text-sm text-left rtl:text-right text-gray-700">
        <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700">
          <tr>
            {tags1}
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>    
    </div>
  )
}
