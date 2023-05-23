import "./CampoTexto.css";
const CampoTexto = (props) => {
  const promsPlaceholder = `${props.placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input placeholder={promsPlaceholder} />
    </div>
  );
};

export default CampoTexto;
