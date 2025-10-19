'use client';
import styles from './CarCardList.module.css'
import CarCard from './CarCard.js'

export default function CarCardList({carList}) {
  console.log("carList : ")
  console.log(carList)
  console.log("carList end")

  return (
    <>
      {JSON.stringify(carList)}
      <div className={styles.cardList}>
      {
        carList.map((c, id) => {
          return (
            <CarCard
              car={c}
              key={id}
              className={styles.card}
            />
          )
        })
      }
      </div>
    </>
  );
}