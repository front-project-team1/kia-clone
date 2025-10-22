import styles from './HeadLine.module.css'

export default function HeadLine({children}) {
  return (
    <div className={styles.title}>
      <div className={styles.titleText}>{children}</div>
    </div>
  )
}