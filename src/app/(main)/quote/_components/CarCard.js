'use client';
import styles from './CarCardList.module.css'
import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'

export default function CarCard({car, categoryNo}) {
  const [isHovering, setIsHovering] = useState(false);
  const { rcCode, basicPrice, replaceTxt, sidePcImg, d45PcImg } = car;
  const API_BASE = "https://www.kia.com/"
  const path = `/build?rcCode=${rcCode}`
  const animationRef = useRef(null);


  const makeClassString = (baseClass, hoverClass) => {
    let result = baseClass
    const states = [isHovering];
    if (isHovering) {
      result +=` ${ hoverClass}`
    }
    return result
  }

  useEffect(() => {
    // 리픞포우를 일으킴
    animationRef.current.classList.remove(styles.slideLeft);
    animationRef.current.offsetWidth;
    animationRef.current.classList.add(styles.slideLeft);
  }, [categoryNo])

  return (
    <>
      <div className={styles.card}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <Link href={"#"}>
          <div className={styles.cardContents}>
            <div className={styles.imgContainer}>
              <img 
                className={
                  makeClassString(styles.hoverImg, styles.hoverImgHover)
                }
                src={API_BASE + d45PcImg}>
              </img>
              <img ref={animationRef}
                className={
                  makeClassString(styles.firstImg, styles.firstImgHover)
                } 
                src={API_BASE + sidePcImg}>
              </img>
            </div>
            <div className={styles.cardTitle}>{replaceTxt}</div>
            <div className={styles.cardCaption}>{(basicPrice / 10000).toLocaleString() + " 만원 ~"}</div>
          </div>
        </Link>
      </div>
    </>
  );
}