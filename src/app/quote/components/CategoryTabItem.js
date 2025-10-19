'use client';
import styles from './CategoryTab.module.css'


export default function CategoryTabItem({text, itemId, setActiveItemId, acitveStyle}) {
  const handleItemClick = () => {
    setActiveItemId(itemId);
    console.log(`CategoryTabItem에서 activeItemId를 ${itemId}로 수정함`);
  }

  return (
    <li 
      style={{ cursor: 'pointer' }}
      onClick={handleItemClick}
      className={`${acitveStyle} ${styles.categoryTabItem}`}
    >
      {text}
    </li>
  );
}