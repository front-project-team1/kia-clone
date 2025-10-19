import styles from './NavigationTab.module.css'

export default function NavigationTab() {
  return (
    <>
      <div className={styles.container}>
        <button type="button">트림</button>
        <button type="button">컬러</button>
        <button type="button">옵션</button>
        <button type="button">액세서리</button>
      </div>
    </>
  )
}