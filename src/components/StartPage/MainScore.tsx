import React from 'react'
import { StyledMainScore, StyledNumbersScore } from './MainScoreStyles'

interface valuesProps{
  userScore: number,
  compScore: number
}

const CenterScore = ({userScore,compScore}:valuesProps) => {
  return (<>
    <StyledMainScore>
    Score:
    </StyledMainScore>
    <StyledNumbersScore>
    {userScore}
    </StyledNumbersScore>
  <StyledNumbersScore>
    {compScore}
  </StyledNumbersScore>
    </>
  )
}

export default CenterScore