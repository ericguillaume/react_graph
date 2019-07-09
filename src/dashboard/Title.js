import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children /* children is what is contained in the JSX tag*/}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node
};
