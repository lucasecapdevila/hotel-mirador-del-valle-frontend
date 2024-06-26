import { Route, Routes } from "react-router-dom"
import Admin from "../pages/Admin"
import FormularioHabitaciones from "../pages/habitaciones/FormularioHabitaciones"
import Registro from "../pages/Registro"

const RutasAdmin = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Admin></Admin>} />
      <Route exact path='/crear' element={<FormularioHabitaciones editar={false} titulo='Agregar habitación'></FormularioHabitaciones>} />
      <Route exact path='/editar/:id' element={<FormularioHabitaciones editar={true} titulo='Editar habitación'></FormularioHabitaciones>} />
      <Route exact path='/editarusuario/:id' element={<Registro editar={true} titulo='Editar usuario'></Registro>} />
    </Routes>
  )
}

export default RutasAdmin