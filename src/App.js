import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./componentes/Header/Header.js";
import Formulario from "./componentes/Formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  //Ternario --> Condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Registrar colabor", colaborador);
    //Spread operador
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador ", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color
  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  return (
    <div>
      <Header />
      {/*Ternario*/}
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {/*Corto Circuito*/}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
