import {
    faBriefcase,
    faDumbbell,
    faFaceSmile,
    faUtensils,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState } from "react";
  import {
    Accordion,
    Carousel,
    Container,
    Row,
    Col,
    Button,
    Modal,
  } from "react-bootstrap";
  
  const Inicio = () => {
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <main className="mainPage">
        <Carousel id="carouselPrincipal" fade>
  <Carousel.Item>
    <img
      className="img-fluid"
      src="https://images.pexels.com/photos/5118088/pexels-photo-5118088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
    <Carousel.Caption>
      
      <h2 className="fs-1 text-uppercase titulos">Naturaleza</h2>
      <p className="textosAlternativos">
        Estamos situados en el corazón de los Valles Calchaquíes.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="https://images.pexels.com/photos/1537577/pexels-photo-1537577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <Carousel.Caption>
      <h2 className="fs-1 text-uppercase titulos">Paz</h2>
      <p className="textosAlternativos">
        Hotel Mirador del Valle, tu lugar para descansar.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="https://images.pexels.com/photos/9290787/pexels-photo-9290787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <Carousel.Caption>
      <h2 className="fs-1 text-uppercase titulos">Disfruta</h2>
      <p className="textosAlternativos">
        Estamos preparados para brindarte el mejor servicio.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  
        <Container>
            
          <section className="container d-flex flex-column my-4">
            <h3 className="text-center titulos azulOscuro fs-2 my-4">Nuestros servicios</h3>
            <Row className="my-3">
              <Col
                sm={12}
                md={6}
                lg={3}
                className="d-flex flex-column align-items-center my-3"
              >
                 <div className="serviciosInicio">
                <FontAwesomeIcon className="fs-3 m-5" icon={faUtensils} /></div>
                <h5 className="titulos azulOscuro mt-3">Restaurantes</h5>
                <p className="m-0 textosAlternativos azulOscuro">Restaurante en el hotel</p>
                <p className="m-0 textosAlternativos azulOscuro">Servicio a la habitación</p>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={3}
                className="d-flex flex-column align-items-center my-3"
              >
                <div className="serviciosInicio">
                <FontAwesomeIcon className="fs-3 m-5" icon={faDumbbell} /></div>
                <h5 className="titulos azulOscuro mt-3">Gimnasio y recreación</h5>
                <p className="m-0 textosAlternativos azulOscuro">Gimnasio</p>
                <p className="m-0 textosAlternativos azulOscuro">Piscina al aire libre</p>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={3}
                className="d-flex flex-column align-items-center my-3"
              >
                 <div className="serviciosInicio">
                <FontAwesomeIcon className="fs-3 m-5" icon={faBriefcase} /></div>
                <h5 className="titulos azulOscuro mt-3">Negocios y trabajo</h5>
                <p className="m-0 textosAlternativos azulOscuro">Centro de negocios</p>
                <p className="m-0 textosAlternativos azulOscuro">Salas de Reuniones</p>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={3}
                className="d-flex flex-column align-items-center my-3"
              >
                <div className="serviciosInicio">
                <FontAwesomeIcon className="fs-3 m-5" icon={faFaceSmile} /></div>
                <h5 className="titulos azulOscuro mt-3">Comodidades</h5>
                <p className="m-0 textosAlternativos azulOscuro">Estacionamiento gratis</p>
                <p className="m-0 textosAlternativos azulOscuro">Wi-Fi gratis</p>
              </Col>
            </Row>
  
            <Button
              className="botonVerde align-self-center mt-2"
              onClick={() => setLgShow(true)}
            >
              Características accesibles para personas con discapacidades
            </Button>
  
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title
                  className="titulos"
                  id="example-modal-sizes-title-lg"
                >
                  Características accesibles para personas con discapacidades
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="textos">
                <p>
                  Nos esforzamos por brindar una estadía cómoda a todos los
                  huéspedes. Si tiene preguntas adicionales sobre las
                  características de accesibilidad del hotel o una solicitud
                  relacionada con una discapacidad de cualquier tipo, comuníquese
                  directamente con el hotel y seleccione la opción para
                  comunicarse con la recepción.
                </p>
                <hr />
                <h4 className="titulos">
                  Las características disponibles incluyen:
                </h4>
                <ul>
                  <li>Rampa de entrada al edificio</li>
                  <li>Accesible para personas con discapacidades</li>
                  <li>Ascensor accesible para personas con discapacidades</li>
                  <li>
                    Habitaciones accesibles para personas con discapacidades
                    motrices, con puertas de entrada o paso que ofrecen un ancho
                    libre de 32 pulgadas
                  </li>
                  <li>
                    Salas de reuniones accesibles para personas con discapacidades
                  </li>
                  <li>
                    Lugares de estacionamiento reservados para personas con
                    discapacidades en el estacionamiento sin servicio de valet
                  </li>
                  <li>
                    Rampa de acceso desde la entrada hasta el área de recepción
                  </li>
                  <li>
                    Rampa de acceso desde la entrada del hotel hasta al menos un
                    restaurante
                  </li>
                  <li>
                    Rampa de acceso desde la entrada del hotel hasta las
                    instalaciones de ejercicios
                  </li>
                  <li>
                    Rampa de acceso desde la entrada del hotel hasta la piscina
                  </li>
                  <li>Piscina accesible para personas con discapacidades</li>
                  <li>Puertas de los baños de un ancho mínimo de 32 pulgadas</li>
                  <li>Ascensor con botones en braille</li>
                  <li>Números de habitación en braille</li>
                  <li>Barras de apoyo en el baño</li>
                  <li>Barra de armario a baja altura o regulable</li>
                  <li>Botones del ascensor a baja altura</li>
                  <li>Interruptores de luz a baja altura</li>
                  <li>Estantes para guardar objetos a baja altura</li>
                  <li>Controles del termostato a baja altura</li>
                  <li>
                    Instalaciones/áreas públicas accesibles para personas con
                    discapacidades físicas
                  </li>
                  <li>Se aceptan animales de asistencia</li>
                  <li>
                    Alarmas visuales para personas con problemas de audición
                  </li>
                </ul>
                <hr />
                <h4 className="titulos">
                  Las siguientes características no están disponibles:
                </h4>
                <ul>
                  <li>Conserjería accesible para personas con discapacidades</li>
                  <li>
                    Transporte accesible para personas con discapacidades
                    disponible con previo aviso
                  </li>
                  <li>
                    Dispositivos de audición asistida para reuniones, disponibles
                    a solicitud
                  </li>
                  <li>
                    Subtítulos en los televisores o decodificadores de subtítulos
                  </li>
                  <li>Estacionamiento únicamente con servicio de valet</li>
                </ul>
              </Modal.Body>
            </Modal>
          </section>
          <hr />
          </Container> 
          <Carousel indicators={false} id="carouselReseñas">
      <Carousel.Item>
        <img
          src="https://i.ibb.co/YWDrwwr/rese-a-5.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/4Y8K3BX/rese-a-1.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/JFSxgjN/rese-a-2.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/SKkxx2n/rese-a-3.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/q5nKYzH/rese-a-4.png"
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
          <Container>
          <hr />
          <section className="my-4">
            <h3 className="text-center titulos">Comodidades destacadas</h3>
            <div className="d-flex flex-column flex-md-row justify-content-center">
              <div className="m-3 hvr-grow-shadow contenedor">
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/6796964/pexels-photo-6796964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Gym del hotel"
                />
                <div className="textoEnImagen">
                  <h4 className="text-uppercase ms-3 titulos">Gimnasio</h4>
                </div>
              </div>
  
              <div className="m-3 hvr-grow-shadow contenedor">
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/462129/pexels-photo-462129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Piscina del hotel"
                />
                <div className="textoEnImagen">
                  <h4 className="text-uppercase ms-3 titulos">Piscina</h4>
                </div>
              </div>
  
              <div className="m-3 hvr-grow-shadow contenedor">
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Restaurante del hotel"
                />
                <div className="textoEnImagen">
                  <h4 className="text-uppercase ms-3 titulos">Restaurante</h4>
                </div>
              </div>
            </div>
          </section>
          <section className="my-4">
            <h3 className="text-center titulos">Nuestras políticas</h3>
            <Accordion className="textosAlternativos">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Cancelación</Accordion.Header>
                <Accordion.Body className="textos">
                  Las políticas de cancelación pueden variar según la tarifa y las
                  fechas de su reservación. Consulte su confirmación de
                  reservación para verificar la política de cancelación. Si
                  necesita más ayuda, llame directamente al hotel o comuníquese
                  con el servicio al cliente. Como alternativa, puede cancelar su
                  reservación en línea.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Check-in/check-out</Accordion.Header>
                <Accordion.Body className="textos">
                  <p>Edad mínima para registrarse: 18</p>
                  <p>Tarifa de check-out anticipado: $AR0.00</p>
                  <p>Tarifa de check-out prorrogado: $AR0.00</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Pago</Accordion.Header>
                <Accordion.Body className="textos">
                  <p>Moneda: Peso argentino</p>
                  <p>Tarjetas de crédito aceptadas:</p>
                  <div className="d-flex">
                    <div className="w-25">
                      <img
                        className="img-fluid w-50"
                        src="https://www.logo.wine/a/logo/American_Express/American_Express-Logo.wine.svg"
                        alt="Logo American Express"
                      />
                    </div>
                    <div className="w-25">
                      <img
                        className="img-fluid w-50"
                        src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg"
                        alt="Logo Visa"
                      />
                    </div>
                    <div className="w-25">
                      <img
                        className="img-fluid w-50"
                        src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg"
                        alt="Logo MasterCard"
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Política sobre mascotas</Accordion.Header>
                <Accordion.Body className="textos">
                  Las mascotas son bienvenidas. Tenga en cuenta que se aplica un
                  cargo de $50 USD a los cargos de habitación por mascota, con un
                  límite de dos mascotas. También ofrecemos una cama y tazones
                  para mascotas.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </Container>
        
      </main>
    );
  };
  
  export default Inicio;
  