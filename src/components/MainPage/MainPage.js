import styles from './MainPage.module.css'
import mainSlider from '../../assets/main_slider.png'
const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            
                <img  src={mainSlider}/>
                <span className={styles.mainText}>Welcome to our store</span>
                <div><span className={styles.mainDescription}>Shop Our Amazing Selection of Liquor, Beer, And Wine</span></div>
                <button>Shop now</button>

        </div>
    )

}

export default MainPage;