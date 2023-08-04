import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Card from "../component/Card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1></h1>
		<p>
			<img />
		</p>
		<Card />
		<Link to="/profile">
		<button href="#" className="btn btn-success">
			
		</button>
		</Link>
	</div>
);
