import "./styles.css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { UilArrowRight } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Portafolio() {
  return (
    <section className="portafolio section" id="portafolio">
      <h2 className="section__title">Portafolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portafolio__container container swiper">
        <Swiper          
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          style={{maxWidth:'500px'}}       
        >
          {/*Portafolio 1 */}
          <SwiperSlide style={{height:'380px', textAlign:"center"}} className="portafolio__content grid swiper-slide">
            <img
              src="src/assets/portfolio1.jpg"
              alt="img1"
              className="portafolio__img"
            />
            <div className="portafolio__data">
              <h3 className="portafolio__title">Modern Website</h3>
              <p className="portafolio__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>

              <a
                href="#"
                className="button button--flex button--small portafolio__button"
              >
                Demo <UilArrowRight className="button__icon" />
              </a>
            </div>
          </SwiperSlide>

          {/* Portafolio 2 */}
          <SwiperSlide style={{height:'380px', textAlign:"center"}} className="portafolio__content grid">
            <img
              src="src/assets/portfolio2.jpg"
              alt="img2"
              className="portafolio__img"
            />

            <div className="portafolio__data">
              <h3 className="portafolio__title">Brand Design</h3>
              <p className="portafolio__description">
                Website adaptable to all devices, with ui components and
                animated interactions.{" "}
              </p>
              <a
                href=""
                className="button button--flex button--small portafolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </SwiperSlide>

          {/* Portafolio 3 */}
          <SwiperSlide style={{height:'380px', textAlign:"center"}} className="portafolio__content grid">
            <img
              src="src/assets/portfolio3.jpg"
              alt="img3"
              className="portafolio__img"
            />

            <div className="portafolio__data">
              <h3 className="portafolio__title">Online Store</h3>
              <p className="portafolio__description">
                Website adaptable to all devices, with ui components and
                animated interactions.{" "}
              </p>
              <a
                href=""
                className="button button--flex button--small portafolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Portafolio;
