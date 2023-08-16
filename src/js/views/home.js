import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Card from "../component/Card";


export const Home = () => (
	<div className="text-center mt-5">
		<h1></h1>
		<Link to="/add">
					<button className="btn btn-success">Add Contact</button>
				</Link>
	
		<Card />
	
	</div>
);
