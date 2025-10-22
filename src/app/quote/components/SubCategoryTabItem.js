'use client';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import styles from './SubCategoryTab.module.css'

export default function SubCategoryTabItem({text, itemId, setActiveItemId, acitveStyle}) {
  const handleItemClick = () => {
    setActiveItemId(itemId);
    console.log(`SubCategoryTabItem activeItemId를 ${itemId}로 수정함`);
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