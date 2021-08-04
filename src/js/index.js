//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { App } from "./component/home.js";

//render your react application
//ReactDOM.render(<App />, document.querySelector("#app"));

import { Counter } from "./component/counter.js";

let counter = 0;

setInterval(function() {
	ReactDOM.render(
		<Counter seconds={counter} />,
		document.getElementById("app")
	);
	counter += 1;
}, 1000);
