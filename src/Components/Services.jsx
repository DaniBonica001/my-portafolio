import "./styles.css";
import { UilWebGrid } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";
import { UilArrow } from "@iconscout/react-unicons";
import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";

function Services() {
    const [openView, setOpenView] = useState(false)
    const handleShowMoreInformation = (event) =>{
        setOpenView(!openView)
    }

  return (
    <section className="service section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">

        {/* Services 1*/}
        <div className="services__content">
          <div>
            <UilWebGrid className="services__icon" />
            <h3 className="services__title">
              Ui/Ux <br /> Desginer
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button" onClick={handleShowMoreInformation}>
            View More <UilArrowRight className="button__icon" />{" "}
          </span>

          <div className={`services__modal ${openView? 'active-modal':''}`}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Ui/Ux <br />
                Desginer
              </h4>
              <UilTimes className="services__modal-close" onClick={handleShowMoreInformation}/>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>Web page development</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services 2*/}
        <div className="services__content">
          <div>
            <UilArrow className="services__icon" />
            <h3 className="services__title">
              FrontEnd <br /> Developer
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button" onClick={handleShowMoreInformation}>
            View More <UilArrowRight className="button__icon" />{" "}
          </span>

          <div className={`services__modal ${openView? 'active-modal':''}`}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                FrontEnd <br /> Developer
              </h4>
              <UilTimes className="services__modal-close" onClick={handleShowMoreInformation}/>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>Web page development</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services 3*/}
        <div className="services__content">
          <div>
            <UilPen className="services__icon" />
            <h3 className="services__title">
              Brand <br />
              Desginer
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button" onClick={handleShowMoreInformation}>
            View More <UilArrowRight className="button__icon" />{" "}
          </span>

          <div className={`services__modal ${openView? 'active-modal':''}`}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Brand <br />
                Desginer
              </h4>
              <UilTimes className="services__modal-close" onClick={handleShowMoreInformation}/>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>Web page development</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions</p>
                </li>
                <li className="services__modal-services">
                  <UilCheckCircle className="services__modal-icon" />
                  <p>I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
