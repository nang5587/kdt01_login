import TailSelect from "../UI/TailSelect"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useAtom } from "jotai"
import { logAtom } from "../atoms/IsLogin"

import scode from "../db/scode.json"
import sarea from "../db/sarea.json"
export default function Subway() {
    const [login] = useAtom(logAtom);
    const navigate = useNavigate();

    useEffect(() => {
      if (!login) {
        navigate("/");
      }
    }, [login, navigate]);

    const [tags, setTags] = useState([]);
    const [data, setData] = useState([]);
    const [code, setCode] = useState();
    const refSel = useRef();

    const selList = sarea.map(
        item => item["측정소"]
      );
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
     


    const getFetchData = async () => {
        const apiKey = import.meta.env.VITE_APP_API_KEY;

        let url = "https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=";
        url = `${url}${apiKey}&pageNo=1&numOfRows=104&resultType=json&controlnumber=${getYesterday()}10`
        const resp = await fetch(url);
        const data = await resp.json();
      
        let subwayData = data.response.body.items.item;
        setData(subwayData);
        console.log(url);
        console.log("subwayData", subwayData);
    }

    const handleChange = () => {
        const selected = refSel.current.value;
        let codes = sarea.map(item => 
                              `${item["측정소"]},${item["코드"]}`);
        let test = codes.filter(item => item.split(',')[0] == selected);
        setCode(test[0].split(',')[1]);
        console.log(selected);
        console.log(codes);
        let data2 = data.filter(item => item.areaIndex == code);
        console.log("data2",data2);
        const tm = data2.map(item => 
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                           hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer hover:font-bold"
                           >

                            <td className="px-6 p-4 text-center font-medium text-gray-900">
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

    useEffect(()=>{
        getFetchData();
    }, []);

    useEffect(()=>{
        if(!data) return;

        handleChange();
    }, [data]);

  return (
    <div className="w-9/10">
        <div className="w-full flex justify-between items-center">
            <h2 className="text-2xl text-gray-700 font-bold my-10 w-1/2">측정소 선택</h2>
            <div className="w-1/2"><TailSelect 
                id="sel"
                refSel={refSel}
                items={selList}
                handleChange={handleChange}
            />
            </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="font-bold px-6 py-3 text-center w-1/9">
            {scode.pm10.name}({scode.pm10.unit})
            </th>
            <th className="min-w-auto px-6 py-3 text-center w-1/9">
            {scode.co2.name}({scode.co2.unit})
            </th>
            <th className="min-w-auto px-6 py-3 text-center w-1/9">
            {scode.co.name}({scode.co.unit})
            </th>
            <th className="min-w-auto  px-6 py-3 text-center w-1/9">
            {scode.no2.name}({scode.no2.unit})
            </th>
            <th className="min-w-auto  px-6 py-3 text-center w-1/9">
            {scode.no.name}({scode.no.unit})
            </th>
            <th className="min-w-auto  px-6 py-3 text-center w-1/9">
            {scode.nox.name}({scode.nox.unit})
            </th>
            <th className="min-w-auto  px-6 py-3 text-center w-1/9">
            {scode.o3.name}({scode.o3.unit})
            </th>
            <th className="min-w-auto  px-6 py-3 text-center w-1/9">
            {scode.pm25.name}({scode.pm25.unit})
            </th>
            <th className="min-w-auto  px-6 py-3 text-center w-1/9">
            {scode.fad.name}({scode.fad.unit})
            </th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>    
    </div>
  )
}
