import styles from './MainPage.module.css'
import mainSlider from '../../assets/main_slider.png'
import Whiskey from '../../assets/whiskey.png'
import Tequila from '../../assets/tequila.png'
import Rum from '../../assets/rum.png'
import Gin from '../../assets/gin.png'
import Beer from '../../assets/beer.png'
import Wine from '../../assets/wine.png'
import mainBanner from '../../assets/mainBanner.png'
import Bacardi from '../../assets/brands/bacardi.png'
import Branson from '../../assets/brands/branson.png'
import Genius from '../../assets/brands/genius.png'
import Jimbeam from '../../assets/brands/jimbeam.png'
import Milestone from '../../assets/brands/milestone.png'
import Miller from '../../assets/brands/miller.png'
import { Col } from 'react-bootstrap'


const items = [
    {id:1, src: Whiskey, title: 'Whiskey'},
    {id:2, src: Tequila, title: 'Tequila'},
    {id:3, src: Rum, title: 'Rum'},
    {id:4, src: Gin, title: 'Gin'},
    {id:5, src: Beer, title: 'Beer'},
    {id:6, src: Wine, title: 'Wine'}
]

const brands = [
    {id:1, src: Bacardi },
    {id:2, src: Branson },
    {id:3, src: Genius },
    {id:4, src: Jimbeam },
    {id:5, src: Milestone },
    {id:6, src: Miller }
]

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Col className={styles.header}>
                {/* <img className={styles.mainBg} src={mainSlider}/> */}
                <span className={styles.mainText}>Welcome to our store</span>
                <h1 className={styles.mainDescription}>Shop Our Amazing Selection of <br/>Liquor, Beer, And Wine</h1>
                <div><button className={styles.mainBtn}>Shop now</button></div>
            </Col>

            <Col className={styles.grid}>
                {items.map(x => (
                    <h3><img className={styles.mainImages} src={x.src} key={x.id} />{x.title}</h3>))}
            </Col>

            <Col className={styles.mainBanner}>
                {/* <img src={mainBanner} /> */}
                <h1 className={styles.mainBannerText}>Get an Extra 10% off your first <br/>order</h1>
                <span className={styles.mainBannerDesk}>With a large selection of popular spirits and hard to find rare liquors,
                <br/> we are your one stop shop for all your alcohol needs.</span>
                <button className={styles.mainBtn}>Shop now</button>
            </Col>

            <Col>
                <h3 className={styles.brandsSpan}>Popular brands</h3>
                <div className={styles.brands}>
                    {brands.map(x => <img className={styles.brandsContent}src={x.src} key={x.id} />)}
                </div>
            </Col>
            
            <div className={styles.hrs}>
                <Col>
                    <span className={styles.chooseSpan}>Why Choos Us</span>
                    <hr/>
                </Col>
                <Col className={styles.choose}>
                    <span>Quality<p>All our beverages are supplied by proven manufacturers from all around the world. We guarantee the high-class quality.</p></span>
                    <span>Domestic & Commercial<p>We ship all over USA as well as overseas. It takes 3-5 business days for package to be delivered right to your doors within US.</p></span>
                    <span>Best Cost<p>Prices on our products are fair and affordable. You will be gladly surprised once you get your package delivered!</p></span>
                </Col>
            </div>

            <div className={styles.subscribe}>
                <span>Get our latest news and special sales </span>
                <p>YOU MAY UNSUBSCRIBE AT ANY MOMENT. FOR THAT PURPOSE, PLEASE FIND OUR CONTACT INFO IN THE LEGAL NOTICE.</p>
                <form>
                    <input type='text' placeholder='Email Adress'></input>
                    <button>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    )

}

export default MainPage;