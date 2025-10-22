'use client';
import styles from './CategoryTab.module.css'


export default function CategoryTabItem({text, itemId, activeItemId, setActiveItemId, acitveStyle}) {
  const handleItemClick = () => {
    setActiveItemId(itemId);
    console.log(`CategoryTabItem에서 activeItemId를 ${itemId}로 수정함`);
  }



  return (
    <li 
      style={{ cursor: 'pointer' }}
      onClick={handleItemClick}
      className={`${styles.categoryTabItem}`}
    >
      <div className={`${styles.categoryText}`}>{text}</div>
      <div className={`${styles.categoryMinibar} ${acitveStyle}`}></div>
    </li>
  );
}