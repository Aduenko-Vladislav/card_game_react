import React from 'react'
import { StyledUsername, UserIcon} from './UsernameStyles'
import LogoIcon from "../../assets/img/icons1.png";

interface UsernameProps {
  username: string;
}


const Username = ({username}:UsernameProps) => {
  return (
    <StyledUsername className='username'>
      <UserIcon src={LogoIcon} alt='UserIcon'/>
      <p>{username}</p>
    </StyledUsername>
  )
}

export default Username