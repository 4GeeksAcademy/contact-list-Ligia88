import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";


const Edit = () => {
    const params = useParams()
  return (
	<div className="text-center mt-5">
        estoy en la edicion del contacto  {params.id}
        <Link to="/">volver al home</Link>

	</div>)
};

export default Edit 