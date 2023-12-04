import React from 'react'
import { StyledUsername, UserIcon} from './UsernameStyles'
import LogoIcon from "../../assets/img/icons1.png";


const Username = () => {
  return (
    <StyledUsername className='username'>
      <UserIcon src={LogoIcon} alt='UserIcon'/>
      <p>Uladislav</p>
    </StyledUsername>
  )
}

export default Username