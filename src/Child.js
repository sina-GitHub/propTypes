import React from "react";
import PropTypes from "prop-types";

export default function Child(props) {
  const children = props.children;

  return (
    <h1 onClick={props.onClick}>
      {props.title}
      <div>{children}</div>
    </h1>
  );
}

Child.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]),
  children: PropTypes.element.isRequired,
  //   requiredAny: PropTypes.any.isRequired,
  //   optionalArray: PropTypes.array,
  //   optionalBool: PropTypes.bool,
  //   optionalObject: PropTypes.object,
  //   optionalSymbol: PropTypes.symbol,
};
