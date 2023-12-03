import { Icon, NameUser, Wrapper } from "./styles";

interface IconProps {
  userLogo: string;
  userName: string;
}

const User = ({ userLogo, userName }: IconProps) => {
  return (
    <Wrapper>
      <Icon src={userLogo} />
      <NameUser>{ userName  ?  userName  : "Computer"}</NameUser>
    </Wrapper>
  );
};

export default User;
