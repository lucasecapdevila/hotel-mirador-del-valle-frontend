import "./App.css";
import { useState } from "react";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuienesSomos from "./components/pages/QuienesSomos";
import Habitaciones from "./components/pages/Habitaciones";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";
import Contacto from "./components/pages/Contacto";
import Reservas from "./components/pages/reservas/Reservas";
import Galeria from "./components/pages/Galeria";
import Inicio from "./components/pages/Inicio";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("inicioHotelMiradorDelValle")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  const [fechaEntrada, setFechaEntrada] = useState()
  const [fechaSalida, setFechaSalida] = useState()

  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/quienesSomos" element={<QuienesSomos />} />
        <Route exact path="/contacto" element={<Contacto></Contacto>} />
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
        <Route exact path='/registro' element={<Registro editar={false} titulo='Agrega tu Usuario!!' />} />
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin />
            </RutasProtegidas>
          }
        />

        <Route exact path="/galeriadeimagenes" element={<Galeria />} />
        <Route
          exact
          path="/habitaciones/"
          element={
            <Habitaciones
              fechaEntrada={fechaEntrada}
              setFechaEntrada={setFechaEntrada}
              fechaSalida={fechaSalida}
              setFechaSalida={setFechaSalida}
              usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}
            />
          }
        />
        <Route exact path="/reservas/:id/:fechaEntrada/:fechaSalida" element={<Reservas />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
