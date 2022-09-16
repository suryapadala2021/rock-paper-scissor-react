import {
  HeaderContainer,
  MainHeading,
  ScoreBoard,
  Score,
  ScoreValue,
} from './styledcomponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <MainHeading>Rock Paper Scissors</MainHeading>
      <ScoreBoard>
        <Score>Score</Score>
        <ScoreValue>{score}</ScoreValue>
      </ScoreBoard>
    </HeaderContainer>
  )
}
export default Header
