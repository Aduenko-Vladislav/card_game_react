import React, { useState } from "react";
import "./name.css";
import ButtonGo from "../ButtonGo/ButtonGo";

const Name = () => {
  const [userName, setUsername] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setUsername(newName);
  };

  return (
    <div className="wrapper">
      <input
        type="text"
        className="name"
        placeholder="Type your name"
        value={userName}
        onChange={handleInputChange}
      />
      <ButtonGo isActive={userName}/>
    </div>
  );
};

export default Name;
