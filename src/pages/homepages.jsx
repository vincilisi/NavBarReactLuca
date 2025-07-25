import { FaReact, FaReacteurope } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import "../pages/css/home.css";
import { useEffect, useState } from "react";
import FireImg from "../assets/media/firebase.png"
import ReactImg from "../assets/media/react.png"
import HtmlImg from "../assets/media/html.jpg"
import CssImg from "../assets/media/css.jpg"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const HomePages = () => {
  const [pageShow, setPageShow] = useState(true);
  const [spon, SetSponsor] = useState(0);
  const sponsors = [
    { img: FireImg },
    { img: ReactImg },
    { img: HtmlImg },
    { img: CssImg }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      SetSponsor((prevet) => (prevet + 1) % sponsors.length)
    }, 5000)
    return () => clearInterval(interval); // Evita duplicazione degli intervalli
  }, [sponsors.length]
  );

  const handleNext = () => {
    SetSponsor((prev) => (prev + 1) % sponsors.length);
  };

  const handlePrev = () => {
    SetSponsor((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  if (pageShow) {
    return (
      <div className="container">
        <p className="Phome">
          Qusta Applicazione è stata creata da me con solo React ed è un esempio
          di Menu' del McDonald's
        </p>
        <FaReacteurope
          onClick={() => setPageShow(false)}
          className="icona-react-europa"
        />
      </div>
    );
  }
  return (

    <div className="homepage">
      <h1>Home Page</h1>
      <h2 className="description">
        Un sorriso ad ogni morso. McDonald's: il gusto che fa felice
      </h2>

      <div className="luogo-orari-container">
        <div className="mappa">
          <h2>📍 Ci troviamo a...</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177399.89686690367!2d12.170489018399412!3d45.99375718892127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477915a1ca2fee05%3A0x1eadc13972325d7e!2sMcDonald&#39;s%20San%20Vendemiano%20-%20Conegliano!5e0!3m2!1sit!2sit!4v1753283098632!5m2!1sit!2sit"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa McDonald's San Vendemiano"
          ></iframe>
        </div>

        <div className="orari">
          <h2>📆 Orari di apertura</h2>
          <table className="oraritempo">
            <tbody>
              <tr><td>Lunedì</td><td>07:30 - 23:30</td></tr>
              <tr><td>Martedì</td><td>07:30 - 23:30</td></tr>
              <tr><td>Mercoledì</td><td>07:30 - 23:30</td></tr>
              <tr><td>Giovedì</td><td>07:30 - 23:30</td></tr>
              <tr><td>Venerdì</td><td>07:30 - 02:00</td></tr>
              <tr><td>Sabato</td><td>07:30 - 02:00</td></tr>
              <tr><td>Domenica</td><td>07:30 - 01:00</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="carosello-container">
        <button className="freccia sinistra" onClick={handlePrev}>
          <MdArrowBackIos />
        </button>

        <div className="carosello">
          <div className="carosello-wrapper">
            <img src={sponsors[spon].img} alt={`Sponsor ${spon + 1}`} />
          </div>
        </div>

        <button className="freccia destra" onClick={handleNext}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  )
};
export default HomePages;
