import { useState } from "react";
import { Input, Wrapper } from "./styles";
import ButtonShuffle from "../ButtonShuffle/ButtonShuffle";
import { useDispatch } from "react-redux";
import { changeGameStatus, changeUserName } from "../../store/slices/gameData";

const Name: React.FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>(() => {
    const storedName = sessionStorage.getItem("userName");
    return storedName || "";
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setUserName(newName);
  };

  const onClickButtonShuffle = () => {
    dispatch(changeUserName(userName));
    dispatch(changeGameStatus("active"));
    sessionStorage.setItem("userName", userName);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Type your name"
        value={userName}
        onChange={handleInputChange}
      />
      <ButtonShuffle isActive={userName} onClick={onClickButtonShuffle} />
    </Wrapper>
  );
};

export default Name;
