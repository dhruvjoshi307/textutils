import React from "react";
// import PropTypes from "prop-types";
function Alert(props) {
  const Capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height:'75px'}}>
      {/* props.alert && <= condition to show the alert */}
    {props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade in show mt-3`}
        role="alert"
      >
        <strong>{Capitalize(props.alert.type)} : </strong>
        {props.alert.msg}
      </div>}
      </div>
    )
}
export default Alert;
