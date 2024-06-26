import { Container } from "react-bootstrap";
import logo from "../../assets/iconWhite.png";
import grupo2 from "../../assets/diseñoweb-grupo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bgFooter text-light py-3 d-flex justify-content-center">
      <Container className="footerdiv row">
        <div className="col-lg-3 col-md-3">
          <Link to='/'>
            <img
              src={logo}
              alt="logo mirador del valle hotel"
              className="mt-lg-4 footerimg"
            />
          </Link>
        </div>
        <div className="col-lg-4 mx-lg-auto col-md-4 mx-md-auto">
          <h4 className="footerTitulo mt-2">CONTÁCTANOS</h4>
          <hr />
          <p className="footerTexto mb-0">
            <strong>Hotel Mirador Del Valle - Tafi Del Valle</strong>
          </p>
          <p className="footerTexto mt-0">
            Ubicado en el corazón de los <em>Valles Calchaquíes, Tucumán</em>
          </p>
          <p className="footerTexto ">
            Celular para consultas:{" "}
            <a
              href="https://wa.me/543813048258?text=%C2%A1Hola,%20amigos%20de%20Hotel%20Mirador%20del%20Valle!%0ANecesito%20asesoramiento.%20"
              title="Numero de Celular/WhatsApp"
              className="text-white link-underline link-underline-opacity-0"
            >
              +5493813048258
            </a>
          </p>
          <p className="footerTexto">
            <a
              href="mailto:hotelmiradordelvalle.25.07@gmail.com"
              title="Correo Electronico"
              className="text-light link-underline link-underline-opacity-0 fw-semibold gmailText"
            >
              hotelmiradordelvalle.25.07@gmail.com
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-4">
          <h4 className="footerTitulo mt-2">REDES SOCIALES</h4>
          <hr />
          <a
            href="https://www.instagram.com/hotelmiradordelvalle/"
            target="_blank"
            className="me-3"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="p-1 iconoRedes"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61558151730710&mibextid=kFxxJD"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="p-1 iconoRedes"
            />
          </a>
          <p className="footerTexto">
            <i className="bi bi-instagram"></i>
          </p>
          <p className="footerTitulo2 mb-lg-0">SITIO GESTIONADO POR:</p>
          <hr className="mt-0" />
          <a
            href="https://github.com/lucasecapdevila/hotel-mirador-del-valle-frontend"
            target="_blank"
          >
            <img
              src={grupo2}
              width={250}
              alt="logo rolling code grupo 2 - c76i"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
