import "./styles.css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { UilArrowRight } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import taskm from "../assets/taskManager.jpg"
import pizza from "../assets/pizza_project.jpg"
import travel from "../assets/travel.png"

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
              src={taskm}
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

              {/* <a
                href="#"
                className="button button--flex button--small portafolio__button"
              >
                Demo <UilArrowRight className="button__icon" />
              </a> */}
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
              src={pizza}
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
                href="https://react-food-web-page.vercel.app/"
                target="_blank"
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
              src={travel}
              alt="img3"
              className="portafolio__img"
            />

            <div className="portafolio__data">
              <h3 className="portafolio__title">Travel web page</h3>
              <p className="portafolio__description">
                Responsive website that provides information about destinations around the world, and helps the user to plan his travel. {" "}
              </p>
              <a
                href="https://book-travel-delta.vercel.app/"
                target="_blank"
                className="button button--flex button--small portafolio__button"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
              <a
                href="https://github.com/DaniBonica001/book_travel"
                target="_blank"
                className="button button--flex button--small portafolio__button"
              >
                Code <UilArrowRight className="button__icon" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Portafolio;
