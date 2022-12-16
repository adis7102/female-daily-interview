import React from "react";

import './styles.scss';

const Input = (props) => {
  const { name, title, onChange, value } = props;

  return (
    <div className="input">
      <p className="title">{title}</p>
      <input
        type="text"
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
      />
    </div>
  );
};

export default Input;
