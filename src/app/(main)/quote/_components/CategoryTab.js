'use client';
import styles from './CategoryTab.module.css'
import CategoryTabItem from './CategoryTabItem.js'
import { useEffect  } from 'react';

export default function CategoryTab({categories, setCategoryNo, activeItemId, setActiveItemId}) {
  useEffect(() => {
    if (activeItemId !== -1) {
      let mainCategoryNo = categories[activeItemId].code
      let subCategoryNo = -1;
      if (categories[activeItemId].subCategories) { // 서브카테고리 정보가 있다면
        subCategoryNo = categories[activeItemId].subCategories[0].code;
      }
      setCategoryNo({main: mainCategoryNo, sub: subCategoryNo});
    }
  }, [activeItemId]);

  return (
    <div className={styles.container}>
      <ul className={styles.categoryTab}>
        {
          categories.map((category, id) => {
            return (
              <CategoryTabItem 
                text={category.name.replaceAll('&amp;', '&')}
                setActiveItemId={setActiveItemId}
                activeItemId={activeItemId}
                itemId={id}
                acitveStyle={(activeItemId == id) ? styles.active : ""}
                key={id}
              />
            )
          })
        }
      </ul>
    </div>

    );
}