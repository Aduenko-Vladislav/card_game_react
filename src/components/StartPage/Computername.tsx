import React from 'react'
import { StyledComputername, ComputerIcon} from './ComputerStyles'
import LogoIcon from "../../assets/img/computericon.png";


const Computername = () => {
  return (
    <StyledComputername className='computername'>
      <ComputerIcon src={LogoIcon} alt='ComputerIcon'/>
      <p>Computer</p>
    </StyledComputername>
  )
}

export default Computername