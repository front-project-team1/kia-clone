'use client';
import CategoryTab from "./components/CategoryTab.js";
import SubCategoryTab from "./components/SubCategoryTab.js"
import CarCardList from "./components/CarCardList.js"
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link'

export default function Quote() {
  console.log("변수 초기화됨")
  /*
    categories :[ 
      {
        "code": "1",
        "name": "EV",
        "subCategories": null
      },
      {
        "code": "2",
        "name": "승용",
        "subCategories": [
          {"code": "7","name": "자가용","subCategories": null}, ...
        ]
      },
      ...
    ]
   */
  const [categories, setCategories] = useState([]);
  const [categoryNo, setCategoryNo] = useState({main: -1, sub: -1});
  const [carList, setCarList] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesByCategory, setVehiclesByCategory] = useState([]);

  const makeVehicles = (data) => {
    const fieldsNeeded = ["rcCode", "basicPrice", "replaceTxt", "sidePcImg", "d45PcImg", "categoryNo"]
    let vehicles = data.map((entry) => {
      let newEntry = {}
      for (let field of fieldsNeeded) {
        newEntry[field] = entry[field];
      }
      return newEntry;
    })
    console.log("vehicles : ")
    console.log(vehicles)
    console.log("vehicles end")
    setVehicles(vehicles);
  }

  const filterVehicleByCategory = (vehicles, no) => {
    console.log("no : ")
    console.log(no)
    console.log("no end")
    let filtered = vehicles.filter((v) => {
      if (no.sub != -1) { // 서브카테고리가 있음
        return v.categoryNo == no.sub
      }
      return v.categoryNo === no.main
    })
    // TODO : 서브카테고리항목에 대해서는 filtered가 제대로 작동 안함
    // 서브카테고리마다 각자의 categoryNo를 가지기 때문임
    // console.log("filtered : ")
    // console.log(filtered)
    // console.log("filtered end")
    return filtered
  }

  useEffect(() => {
    fetch('/categories.json').then((r) => r.json()).then((r) => setCategories(r.body));
    fetch('/vehicles.json').then((r) => r.json()).then((r) => makeVehicles(r));
  }, []);

  // 데이터가 불러와진 후 categoryNo의 초기값 걸정
  useEffect(() => {
    console.log("=============debug")
    console.log(categories)
  }, [vehicles])

  useEffect(() => {
    console.log(`debug : categoryNo`)
    console.log(categoryNo)
    console.log(`debug end`)
    if (categoryNo.main != -1 && vehicles.length > 0) { // 선택된 카테고리가 있으면
      setVehiclesByCategory(filterVehicleByCategory(vehicles, categoryNo));
    }
  }, [categoryNo])

  return (
    <div style={{paddingTop: '100px'}}> {/*헤더가 가림, 참고 : https://www.daleseo.com/css-position-fixed-navigation/*/}
      <h1>견적 페이지</h1>
      <button><Link href="/build">이동 테스트</Link></button>
      <div>
        <CategoryTab 
          categories={categories}
          setCategoryNo={setCategoryNo}
        />
      </div>
      <div>
        <SubCategoryTab 
          categories={categories}
          categoryNo={categoryNo}
          setCategoryNo={setCategoryNo}
        />
      </div>
      <div>
        <CarCardList
          carList={vehiclesByCategory}
        />
      </div>
    </div>

  );
}
