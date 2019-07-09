import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
import FormServer from "./form_server";
import MaterialUI from "./material";
import Dashbord, { ChartContainer } from "./dashboard/Dashboard";
import Box from "./try_box";

// import AppStateTest from "./setstate";

// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root")); // sera ecrase par prochaine commande similaire
// ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(<Counter />, document.getElementById("root"));

// ReactDOM.render(<MaterialUI />, document.getElementById("root"));

ReactDOM.render(<Dashbord />, document.getElementById("root"));

// ReactDOM.render(
//   <ChartContainer match="eric" />,
//   document.getElementById("root")
// );
