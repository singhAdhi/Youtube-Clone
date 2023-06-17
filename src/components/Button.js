import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-4 mx-2 rounded-lg bg-gray-200">{name}</button>
    </div>
  );
};

export default Button;
