import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const Edit = () => {
  const params = useParams()
  const { store } = useContext(Context)
  const [detail, setDetail] = useState({})
  function getDetail() {
    const contact = store.contacts.filter((item) => item.id == params.id)
    setDetail(contact)
  }
  useEffect(() => { getDetail() }, [])
  return (
    <div className="text-center mt-5">
      estoy en la edicion del contacto  {params.id}
      <Link to="/">ir al home</Link>
      {detail.name}

    </div>)
};

export default Edit 