import { useState, useEffect } from "react";
import { Input, Wrapper } from "./styles";
import ButtonShuffle from "../ButtonShuffle/ButtonShuffle";

const Name: React.FC = () => {
  const [userName, setUserName] = useState<string>(() => {
    const storedName = sessionStorage.getItem("userName");
    return storedName || "";
  });

  useEffect(() => {
    sessionStorage.setItem("userName", userName);
  }, [userName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setUserName(newName);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Type your name"
        value={userName}
        onChange={handleInputChange}
      />
      <ButtonShuffle userName={userName} />
    </Wrapper>
  );
};

export default Name;
