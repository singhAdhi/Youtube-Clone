import React from "react";
import Button from "./Button";
const list = ["All", "Sports", "Kapil", "Songs"];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => {
        return <Button name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
