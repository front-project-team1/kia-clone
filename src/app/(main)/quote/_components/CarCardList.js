'use client';
import styles from './CarCardList.module.css'
import CarCard from './CarCard.js'

export default function CarCardList({carList, categoryNo}) {
  return (
    <>
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