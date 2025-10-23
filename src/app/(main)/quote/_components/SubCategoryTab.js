'use client';
import styles from './SubCategoryTab.module.css'
import SubCategoryTabItem from './SubCategoryTabItem.js'
import { useState, useEffect } from 'react';

export default function SubCategoryTab({categories, categoryNo, setCategoryNo}) {
  const [activeItemId, setActiveItemId] = useState(0); // categories 배열안의 subCategories 배열의 인덱스(0부터 시작)

  let activeMainItemId = categories.findIndex((c) => c.code === categoryNo.main)  
  let subCategories = []
  if (activeMainItemId !== -1 && categories[activeMainItemId].subCategories) {
    subCategories = categories[activeMainItemId].subCategories;
  }

  useEffect(() => {
    if (subCategories.length > 0) {
      let subCategoryNo = categories[activeMainItemId].subCategories[activeItemId].code;
      setCategoryNo({...categoryNo, sub: subCategoryNo});
    }
  }, [activeItemId]);

  return (
    <div className={styles.container}>
      <ul className={styles.subList}>
        {
          subCategories.map((category, id) => {
            return (
            <SubCategoryTabItem
              text={category.name.replaceAll('&amp;', '&')}
              setActiveItemId={setActiveItemId}
              itemId={id}
              acitveStyle={(activeItemId == id) ? styles.activeItem : ""}
              key={id}
            >  
            </SubCategoryTabItem>
            )
          })
        }
      </ul> 
    </div>
  )
}