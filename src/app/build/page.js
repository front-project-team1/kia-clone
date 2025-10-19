'use client';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MainPanel from './components/MainPanel';

export default function Quote() {
  // 쿼리스트링 얻어오기
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = new URLSearchParams(searchParams);
  const rcCode = q.get("rcCode")

  // 상태 정의
  const [modelInfo, setModelInfo] = useState({});

  // 데이터 패치해오기
  useEffect(() => {
    fetch('/model-info.json').then((r) => r.json()).then((r) => makeModelInfo(r));
  }, []);
  useEffect(() => {
    console.log("modelInfo : ...");
    console.log(modelInfo);
    console.log("modelInfo end");
  }, [modelInfo])
  const makeModelInfo = (info) => {
    const sourceObj = info[rcCode]
    const fieldsNeeded = ["basicPrice", "replaceTxt", "sidePcImg"];
    let newObj = {};
    for (let field of fieldsNeeded) {
      newObj[field] = sourceObj[field];
    }
    setModelInfo(newObj);
  }

  return ( 
    <div style={{paddingTop: '100px'}}> {/*헤더가 가림, 참고 : https://www.daleseo.com/css-position-fixed-navigation/*/}
      <h1>hello!</h1>
      <p>{'pathname : ' + pathname}</p>
      <p>{'searchParams : ' + searchParams}</p>
      <p>{'param : ' + rcCode}</p>

      <div style={{display:"flex", flexDirection:'row-reverse', width: '100%'}}>
        <div style={{backgroundColor: 'aquamarine', width: '500px', height: '500px'}}></div> {/** 사이드 패널 */}
        <MainPanel modelInfo={modelInfo}/>
      </div>
    </div>

  );
}
