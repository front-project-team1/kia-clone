'use client';
import styles from './CategoryTab.module.css'


export default function CategoryTabItem({text, itemId, setActiveItemId, acitveStyle}) {
  const handleItemClick = () => {
    setActiveItemId(itemId);
  }



  return (
    <li 
      style={{ cursor: 'pointer' }}
      onClick={handleItemClick}
      className={`${styles.categoryTabItem}`}
    >
      <div className={`${styles.categoryText} ${acitveStyle}`}>{text}</div>
      <div className={`${styles.categoryMinibar} ${acitveStyle}`}></div>
    </li>
  );
}