// Componentes
import NavbarPrivado from "../components/NavbarPrivado";
import MenuPerfil from "../components/MenuPerfil";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
// Estilos
import "../assets/css/agregarpublic.css";


const AgregarPublicacion = () => {

const navigate = useNavigate();

const guardarPublic = () => {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let adjunto = document.getElementById("adjunto").value;
  let desc = document.getElementById("desc").value;

  if (
    name !== "" &&
    price !== "" &&
    adjunto !== "" &&
    desc !== ""
  ) {alert(
      "Has creado con éxito tu publicación"
    );
    navigate("/mis-publicaciones")
  } 
}
  

  return (
    <>
      <NavbarPrivado />
      <MenuPerfil />
      <div className="container-add-publicacion">
        <div className="div-main">
          <h4>Agregar publicación</h4>
          <h5>
            Los campos marcados con (<span id="asterisco">*</span>) son
            obligatorios.
          </h5>

          <div className="columnas-form">
            <div className="label-input-prod">
              <label className="is-required">Nombre del producto</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
                placeholder=""
              />
            </div>
            <div className="label-input-prod">
              <label className="is-required">Precio</label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                required
                placeholder=""
              />
            </div>
          </div>

          <div className="columnas-form">
            <div className="label-input-prod">
              <label className="is-required">Seleccione una categoría</label>
              <Form.Select
                aria-label="Default select example"
                className="select_input_cat"
                id="select_input_cat"
              >
                <option value="">Categorías</option>
                <option value="1">Alimentación</option>
                <option value="2">Entretención</option>
                <option value="3">Hogar</option>
                <option value="4">Tecnología</option>
                <option value="5">Vestuario</option>
              </Form.Select>
            </div>
            <div className="label-input-prod">
              <label className="is-required">Imagen del producto</label>
              <input
                type="file"
                name="adjunto"
                id="adjunto"
                className="form-control"
                accept=".jpg,.png"
                required
                placeholder="Seleccionar archivo9"
              />
            </div>
          </div>

          <div className="columnas-form" id="id-columnas-form">
            <div className="label-input-prod">
              <label className="is-required">Descripción del producto</label>
              <input
                type="text"
                name="v"
                className="form-control"
                id="form-control-descr"
                placeholder=""
                required
              />
            </div>
            <div className="label-input-prod">
              <button
                className="btn-publicacion"
                data-toggle="tooltip"
                data-placement="top"
                title="Guardar publicación"
                onClick={guardarPublic}
              >
                Guardar publicación
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default AgregarPublicacion;
