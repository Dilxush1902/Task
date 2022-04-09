import React, { useState } from "react";
import "./formInput.css";

const FormInput = ({inputRef, name, required = false, errorMessage, onChange, handleChange, ...props }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="inoutHolder">
      <input
        className="formInput"
        onChange={handleChange}
        onBlur={() => required ? setTouched(true) : setTouched(false)} // ! required true kelsa va required parameterini qoniqtirmasa input borderi qizil ranga o'zgaradi
        onFocus={() => name === "confirmPassword" && setTouched(true)}
        touched={touched.toString()}
        required={required}
        name={name}
								ref={inputRef && inputRef}
        {...props}
      />
      {/* // ! errorMessage chiqarish uchun */}
      {(required && errorMessage) && <div className="errorMessage">{errorMessage}</div>} 
    </div>
  );
};

export default FormInput;
