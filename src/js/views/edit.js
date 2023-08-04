import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Edit = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getDetail();
  }, []);

  function getDetail() {
    const contact = store.contacts.find((item) => item.id === parseInt(params.id));
    setDetail(contact);
  }

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  // Función para enviar los cambios y actualizar el contacto
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.editContact(detail.id, detail);
    // Redireccionar a la página principal después de editar
    // Aquí, reemplaza "/home" con la ruta de tu página principal
    // o el componente que muestra la lista de contactos.
    window.location.href = "/home";
  };

  return (
    <div className="text-center mt-5">
      <h2>Editar contacto {params.id}</h2>
      <Link to="/">Ir al home</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={detail.name || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" name="homeAddress" value={detail.homeAddress || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" name="phone" value={detail.phone || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={detail.email || ''} onChange={handleChange} />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default Edit;
