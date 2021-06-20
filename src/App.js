import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import HeadCarousel from "./components/HeadCarousel";
import Services from "./components/Services";
import Product from "./components/Product";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<HeadCarousel />
						<Services />
						<Product />
					</Route>
					<Route path="/about-us">
						<Breadcrumb />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
