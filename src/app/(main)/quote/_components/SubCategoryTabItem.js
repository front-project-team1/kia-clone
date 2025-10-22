'use client';
import styles from './SubCategoryTab.module.css'

export default function SubCategoryTabItem({text, itemId, setActiveItemId, acitveStyle}) {
  const handleItemClick = () => {
    setActiveItemId(itemId);
  }

  return (
    <li
      style={{ cursor: 'pointer' }}
      className={`${acitveStyle} ${styles.item}`}
      onClick={handleItemClick}
    >
      {text}
    </li>
  )
}