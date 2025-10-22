'use client';
import CategoryTab from "./_components/CategoryTab.js";
import SubCategoryTab from "./_components/SubCategoryTab.js"
import CarCardList from "./_components/CarCardList.js"
import { useState, useEffect } from 'react';
import HeadLine from "./_components/HeadLine.js";

export default function Quote() {
  const [categories, setCategories] = useState([]);
  const [categoryNo, setCategoryNo] = useState({main: -1, sub: -1});
  const [carList, setCarList] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesByCategory, setVehiclesByCategory] = useState([]);
  const [activeCategoryTabItemId, setActiveCategoryTabItemId] = useState(-1);

  const makeVehicles = (data) => {
    const fieldsNeeded = ["rcCode", "basicPrice", "replaceTxt", "sidePcImg", "d45PcImg", "categoryNo"]
    let vehicles = data.map((entry) => {
      let newEntry = {}
      for (let field of fieldsNeeded) {
        newEntry[field] = entry[field];
      }
      return newEntry;
    })
    setVehicles(vehicles);
  }

  const filterVehicleByCategory = (vehicles, no) => {
    let filtered = vehicles.filter((v) => {
      if (no.sub != -1) { // 서브카테고리가 있음
        return v.categoryNo === no.sub
      }
      return v.categoryNo === no.main
    })
    return filtered
  }

  useEffect(() => {
    fetch('/categories.json').then((r) => r.json()).then((r) => setCategories(r.body));
    fetch('/vehicles.json').then((r) => r.json()).then((r) => makeVehicles(r));
  }, []);

  useEffect(() => {
    if (vehicles.length > 0 && categories.length > 0) {
      setActiveCategoryTabItemId(0);
    }
  }, [vehicles, categories])

  useEffect(() => {
    if (categoryNo.main != -1 && vehicles.length > 0) { // 선택된 카테고리가 있으면
      setVehiclesByCategory(filterVehicleByCategory(vehicles, categoryNo));
    }
  }, [categoryNo])

  return (
    <div>
      <HeadLine>견적 내기</HeadLine>
      <CategoryTab 
        categories={categories}
        setCategoryNo={setCategoryNo}
        activeItemId={activeCategoryTabItemId}
        setActiveItemId={setActiveCategoryTabItemId}
      />
      <SubCategoryTab 
        categories={categories}
        categoryNo={categoryNo}
        setCategoryNo={setCategoryNo}
      />
      <div>
        <CarCardList
          carList={vehiclesByCategory}
          categoryNo={categoryNo}
        />
      </div>
    </div>

  );
}
