import { FaReact } from "react-icons/fa";
import "../pages/css/home.css";
import { useEffect, useState } from "react";
import FireImg from "../assets/media/firebase.png";
import ReactImg from "../assets/media/react.png";
import HtmlImg from "../assets/media/html.jpg";
import CssImg from "../assets/media/css.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const HomePages = () => {
  const [spon, SetSponsor] = useState(0);
  const sponsors = [
    { img: FireImg },
    { img: ReactImg },
    { img: HtmlImg },
    { img: CssImg },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      SetSponsor((prev) => (prev + 1) % sponsors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sponsors.length]);

  const handleNext = () => {
    SetSponsor((prev) => (prev + 1) % sponsors.length);
  };

  const handlePrev = () => {
    SetSponsor((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <h2 className="description">
        A smile with every bite. McDonald's: the taste that makes you happy.
      </h2>

      <div className="luogo-orari-container">
        <div className="mappa">
          <h2>📍 We are located in...</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.775713199779!2d-80.1901597!3d25.7779708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69fa85f32a7%3A0x8a7e2d7a1d76004a!2sMcDonald&#39;s!5e0!3m2!1sit!2sit!4v1753447361533!5m2!1sit!2sit"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa McDonald's San Vendemiano"
          ></iframe>
        </div>

        <div className="orari">
          <h2>📆 Opening hours</h2>
          <table className="oraritempo">
            <tbody>
              <tr><td>Monday</td><td>06:00 AM to 11:00 PM</td></tr>
              <tr><td>Tuesday</td><td>06:00 AM to 11:00 PM</td></tr>
              <tr><td>Wednesday</td><td>06:00 AM to 11:00 PM</td></tr>
              <tr><td>Thursday</td><td>06:00 AM to 11:00 PM</td></tr>
              <tr><td>Friday</td><td>06:00 AM to 11:00 PM</td></tr>
              <tr><td>Saturday</td><td>06:00 AM to 11:00 PM</td></tr>
              <tr><td>Sunday</td><td>07:00 AM to 10:00 PM</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="tecno">Tecnologie usate</h3>

      <div className="carosello">
        <button className="freccia sinistra" onClick={handlePrev}>
          <MdArrowBackIos />
        </button>

        <div className="carosello-wrapper">
          <img src={sponsors[spon].img} alt={`Sponsor ${spon + 1}`} />
        </div>

        <button className="freccia destra" onClick={handleNext}>
          <MdArrowForwardIos />
        </button>
      </div>

      <p className="para">Questo progetto è ora responsive, realizzato per scopi formativi con React</p>
    </div>
  );
};

export default HomePages;
