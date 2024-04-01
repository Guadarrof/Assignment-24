import React from "react";

const InputGroup = ({
  labelClass,
  inputClass,
  inputType = "text",
  inputId,
  value = "",
  action
}) => {
  return (
    <div className="input_group">
      <label for={inputId} className={labelClass} />
      <input
        type={inputType}
        id={inputId}
        value={value}
        className={inputClass}
        onChange={action}
      />
    </div>
  );
};

export default InputGroup;
