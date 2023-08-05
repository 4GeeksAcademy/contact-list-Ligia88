import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [updatedContact, setUpdatedContact] = useState({
    name: "",
    homeAddress: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // Carga los datos del contacto existente al montar el componente
    const contact = store.contacts.find((item) => item.id === parseInt(id));
    if (contact) {
      setUpdatedContact(contact);
    }
  }, [id, store.contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.editContact(parseInt(id), updatedContact);
    // Redirige de regreso a la lista de contactos después de editar
    navigate("/");
  };

  return (
    <div className="container my-3">
      <form className="p-3" onSubmit={handleSubmit}>
        <h1 className="text-center mb-4">Edit a Contact</h1>
        <div className="form-group mb-3">
          <label htmlFor="inputName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Full Name"
            value={updatedContact.name}
            onChange={(e) =>
              setUpdatedContact({ ...updatedContact, name: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Enter Email"
            value={updatedContact.email}
            onChange={(e) =>
              setUpdatedContact({ ...updatedContact, email: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputPhone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="inputPhone"
            placeholder="Enter Phone"
            value={updatedContact.phone}
            onChange={(e) =>
              setUpdatedContact({ ...updatedContact, phone: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputAddress">Address</label>
          <textarea
            className="form-control"
            id="inputAddress"
            rows="1"
            placeholder="Enter Address"
            value={updatedContact.homeAddress}
            onChange={(e) =>
              setUpdatedContact({
                ...updatedContact,
                homeAddress: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="row text-center">
          <button type="submit" className="btn btn-success w-50 mx-auto mt-4">
            Save
          </button>
          <Link to="/">
            <small>or get back to contacts</small>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
