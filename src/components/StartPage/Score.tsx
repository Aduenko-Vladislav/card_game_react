import React from 'react'
import { StyledScore } from './ScoreStyles'


interface ScoreProps {
  score: string
}

const Score = ({score}:ScoreProps) => {
  return (
    <StyledScore className='score'>Highscore: {score} </StyledScore>
  )
}

export default Score