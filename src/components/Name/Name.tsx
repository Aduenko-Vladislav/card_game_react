import React, { useState } from "react";
import "./name.css";
import ButtonGo from "../ButtonGo/ButtonGo";
import { changeGameStatus, changeUserName } from "../../Store/Slice/gameData";
import { useDispatch } from "react-redux";



const Name = () => {
  const dispatch = useDispatch();
  const [userName, setUsername] = useState<string>(()=>{
    const applyStorageName=sessionStorage.getItem('name')
    return applyStorageName|| "" });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setUsername(newName);
  };


  const onClickButtonGo = () => {
    dispatch(changeUserName(userName));
    dispatch(changeGameStatus("active"));
    sessionStorage.setItem("name", userName);
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
      <ButtonGo isActive={userName} onClick= {onClickButtonGo}/>
    </div>
  );
};

export default Name;
