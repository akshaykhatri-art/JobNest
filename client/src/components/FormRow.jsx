import React from "react";

const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className="firm-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
};

export default FormRow;
