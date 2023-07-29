import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";


const Profile = () => {
    const params = useParams()
  return (
	<div className="text-center mt-5">
        estoy en el perfil {params.id}
        <Link to="/">volver al home</Link>

	</div>)
};

export default Profile 