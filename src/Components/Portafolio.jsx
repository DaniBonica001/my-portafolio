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
          className="portafolio__swiper"
        >
          {/*Portafolio 1 */}
          <SwiperSlide
            style={{ height: "380px", textAlign: "center" }}
            className="portafolio__content grid swiper-slide"
          >
            <img
              src="src/assets/taskManager.jpg"
              alt="img1"
              className="portafolio__img"
            />
            <div className="portafolio__data">
              <h3 className="portafolio__title">Task Manager</h3>
              <p className="portafolio__description">
                Web page developed with the stack MERN to handle tasks by user.
                This page counts with authentication through JSON Web Tokens and
                cookies.
              </p>

              <a
                href="#"
                className="button button--flex button--small portafolio__button"
              >
                Demo <UilArrowRight className="button__icon" />
              </a>
              <a
                href="https://github.com/DaniBonica001/taskManager-auth-MERN"
                target="_blank"
                className="button button--flex button--small portafolio__button"
              >
                Code <UilArrowRight className="button__icon" />
              </a>
            </div>
          </SwiperSlide>

          {/* Portafolio 2 */}
          <SwiperSlide
            style={{ height: "380px", textAlign: "center" }}
            className="portafolio__content grid"
          >
            <img
              src="src/assets/pizza_project.jpg"
              alt="img2"
              className="portafolio__img"
            />

            <div className="portafolio__data">
              <h3 className="portafolio__title">Pizza Restaurant</h3>
              <p className="portafolio__description">
                Website developed with React to make it easy to the customers to
                know the restaurant and its menu.{" "}
              </p>
              <a
                href=""
                className="button button--flex button--small portafolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
              <a
                href="https://github.com/DaniBonica001/react-foodWebPage"
                target="_blank"
                className="button button--flex button--small portafolio__button"
              >
                Code <UilArrowRight className="button__icon" />
              </a>
            </div>
          </SwiperSlide>

          {/* Portafolio 3 */}
          <SwiperSlide
            style={{ height: "380px", textAlign: "center" }}
            className="portafolio__content grid"
          >
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
