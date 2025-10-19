'use client';
import styles from './CarCardList.module.css'
import Link from 'next/link'

export default function CarCard({car}) {
  console.log(car)
  const { rcCode, basicPrice, replaceTxt, sidePcImg, d45PcImg } = car;
  const API_BASE = "https://www.kia.com/"
  const path = `/build?rcCode=${rcCode}`
  return (
    <>
      <div className={styles.card}>
        <Link href={path}>
          <img src={API_BASE + sidePcImg}></img>
          <p>{replaceTxt}</p>
          <p>{basicPrice + "원 ~"}</p>
        </Link>
      </div>
    </>
  );
}