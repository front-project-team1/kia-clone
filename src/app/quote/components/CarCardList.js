'use client';
import styles from './CarCardList.module.css'
import CarCard from './CarCard.js'
import {useState} from 'react'

export default function CarCardList({carList, categoryNo}) {
  return (
    <>
      {/* <div>{JSON.stringify(carList)}</div> */}
      <div className={styles.cardListContainer}>
        <div className={styles.cardList}>
        {
          carList.map((c, id) => {
            return (
              <CarCard
                car={c}
                key={id}
                categoryNo={categoryNo}
              />
            )
          })
        }
        </div>
      </div>
    </>
  );
}