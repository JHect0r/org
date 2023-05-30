import "./Formulario.css";
import CampoTexto from "../Campo Texto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const formulario = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required />
        <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de Foto"
          required
        />
        <ListaOpciones />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};
export default formulario;
