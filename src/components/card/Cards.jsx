import styles from "./Card.module.scss"
// import cardImg from "../../img/categories/cat-01.jpg"
import arrowImg from "../../img/icons/arrow.svg"

const Cards = ({ title, img }) => { 
  
// const { title, img } = props;

  return (
    <div className={styles.card}>
      <a href="#!" className={styles.cardLink}> </a>
      <img
        className={styles.card__img}
        src={img}
        alt="category..."
      />
      <div className={styles.cardBody}>
        <div className={styles.cardText}>
          <div className={styles.cardTitle}>
            {title}
          </div>
          <div className={styles.cardMuted}>
            Explore Now!
          </div>
        </div>
        <div className={styles.cardIcon}>
            <img src={arrowImg} alt="Open" />
        </div>
      </div>
    </div> 
  );
}
 
export default Cards;