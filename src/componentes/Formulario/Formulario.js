import "./Formulario.css";
import CampoTexto from "../Campo Texto";
const formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" />
        <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de Foto" />
      </form>
    </section>
  );
};
export default formulario;
