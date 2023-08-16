import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import AddContac from "../component/AddContact"

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="px-3">
				<Link to="/add">
					<button className="btn btn-success">Add Contact</button>
				</Link>
				<AddContac/> 
			</div>
			<div className="py-3">
			
			</div>
		</div>
	)
};
