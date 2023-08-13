import Card from "../card/Cards";
import "./arrivals.scss"
import cat1 from "../../img/categories/cat-01.jpg";
import cat2 from "../../img/categories/cat-02.jpg"
import cat3 from "../../img/categories/cat-03.jpg";

const Arrivals = () => {
  return (
    <section>
      <div className="sectionArrivals">
        <div className="container">
          <div className="arrivalsHeader">
              <h2 className="title-2">NEW ARRIVALS</h2>
          </div>
          <div className="arrivalsCards">
            <Card title="Hoodies & Sweetshirt" img={cat1} />
            <Card title = "Coats & Parkas" img={cat2} /> 
            <Card title = "Tees & T-Shirt" img={cat3} />
          </div>
        </div>
      </div>
    </section>

    );
}
 
export default Arrivals;