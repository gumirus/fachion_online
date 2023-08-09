import "./Promo.scss"
import firstPromo from "../../img/images/header-img.jpg"

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              LET’S EXPLORE UNIQUE CLOTHES.
            </div>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <button className="promo__btn-wrapper">
              <p>Shop Now</p>
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