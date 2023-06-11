import { useState } from "react";
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
      equipo: "Programación",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Programación",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Programación",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Front End",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Front End",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Front End",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Data Science",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Data Science",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Data Science",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Devops",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Devops",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
    },
    {
      equipo: "Devops",
      foto: "http://github.com/JHect0r.png",
      nombre: "Hector",
      puesto: "Programador",
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
  const eliminarColaborador = () => {
    console.log("Eliminar colaborador");
  };

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];
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
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
