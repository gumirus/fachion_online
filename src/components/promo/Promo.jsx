import "./Promo.scss"
import firstPromo from "../../img/images/header-img.jpg"

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              Давайте познакомимся с уникальной одеждой.
            </div>
            <div className="promo__desc">
              Живи ради Влиятельной и Инновационной моды!
            </div>
            <button className="promo__btn-wrapper">
              <p>купить сейчас</p>
            </button>
          </div>
          <div className="promo__img">
            <img src={firstPromo}
              alt="cheerfWoman"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default Promo;