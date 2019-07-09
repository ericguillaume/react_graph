import React, { Component } from "react"; // react has to be important to compile JSx
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import BarChartIcon from "@material-ui/icons/BarChart";

export default class Counter extends Component {
  state = { value: 1 };

  render() {
    //  pas de ; quand dans ()
    // one parent mandatory
    // onClick doit etre une fonction sinon appelle au debut et plus apres
    // we dont update the state directtly this.state because we do functionnal programming, react needs to know
    //  which DOM components changed
    // npm install @material-ui/icons works
    return (
      <div>
        <div>{this.state.value}</div>
        <div>{this.state.value}</div>
        <button
          onClick={() => {
            this.setState({ value: this.state.value + 1 });
            console.log("button clicked");
          }}
        >
          Increment
        </button>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Table className="test">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="row">
              <TableCell component="th" scope="row">
                "row"
              </TableCell>
              <TableCell align="right">"cal"</TableCell>
              <TableCell align="right">"fat"</TableCell>
              <TableCell align="right">"carbs"</TableCell>
              <TableCell align="right">"protein"</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
