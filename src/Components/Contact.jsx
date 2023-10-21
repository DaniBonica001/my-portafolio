import "./styles.css";
import { UilPhone } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRef } from "react";


function Contact() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject:"",
      message: "",
    },
  });

  const form = useRef();

  const onSubmit = (data) => {    
    //console.log(data);  
    
    emailjs.sendForm('service_t4swpac','template_rrubtzo',form.current,'0vVHEyCLkV8g8H2i0')
    reset();
    alert("Message submitted")
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <UilPhone className="contact__icon" />

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+57 315 462 0529</span>
            </div>
          </div>

          <div className="contact__information">
            <UilEnvelope className="contact__icon" />

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                danielabc_0106@hotmail.com
              </span>
            </div>
          </div>

          <div className="contact__information">
            <UilMapMarker className="contact__icon" />

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Cali - Colombia</span>
            </div>
          </div>
        </div>

        < form onSubmit={handleSubmit(onSubmit)} className="contact__form grid" ref={form}>
          <div className="contact__inputs grid">

            <div className="contact__content">
              <label htmlFor="yourname" className="contact__label">
                Name
              </label>
              <input
                {...register("name")}
                id="yourname"
                type="text"                
                className="contact__input"
              />
            </div>

            <div className="contact__content">
              <label htmlFor="correito" className="contact__label">
                Email
              </label>
              <input
                {...register("email")}
                id="correito"
                type="email"                
                className="contact__input"
              />
            </div>

            <div className="contact__content">
              <label htmlFor="subjetito" className="contact__label">
                Subject
              </label>
              <input
                {...register("subject")}
                id="subjetito"
                type="text"                
                className="contact__input"
              />
            </div>

            <div className="contact__content">
              <label htmlFor="mensajito" className="contact__label">
                Message
              </label>
              <textarea
                {...register("message")}
                id="mensajito"
                cols="0"
                rows="7"
                type="text"                
                className="contact__input"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="button button--flex">Send Message <UilMessage className="button__icon"/> </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
