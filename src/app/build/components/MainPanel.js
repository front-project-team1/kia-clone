import LeftTopCarInfo from './LeftTopCarInfo'
import NavigationTab from './NavigationTab'
import styles from './MainPanel.module.css'


export default function MainPanel({modelInfo}) {
  const {basicPrice, replaceTxt, sidePcImg} = modelInfo;
  const BASE_URL = "https://www.kia.com/";
  return (
    <>
      <div className={styles.MainPanel} style={{flexGrow: 1, height: '500px'}}>
        <LeftTopCarInfo/>
        <NavigationTab/>
        <div className={styles.ImageContainer}>
          <img className={styles.Image} src={BASE_URL + sidePcImg}/>
        </div>
      </div>
    </>
  )
}