import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  Container,
  ResponseContainer,
  GameView,
  GameButtonsList,
  GameButton,
  ButtonImg,
  RuleButton,
  RuleImg,
  CloseButton,
  ModelContainer,
  ResultBox,
  ResultView,
  ResultInfo,
  ResultDes,
  ResultButton,
  Result,
} from './styledcomponents'

import Header from '../Header/index'

const res = {
  initial: 'initial',
  won: 'YOU WON',
  lost: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class RockPaperScissor extends Component {
  state = {
    resultView: false,
    score: 0,
    userChoiceImg: '',
    opponentChoiceImg: '',
    result: res.initial,
  }

  clickRock = () => {
    const {choiceList} = this.props
    this.gameResult(choiceList[0])
  }

  clickScissor = () => {
    const {choiceList} = this.props
    this.gameResult(choiceList[1])
  }

  clickPaper = () => {
    const {choiceList} = this.props
    this.gameResult(choiceList[2])
  }

  restart = () => {
    this.setState({resultView: false})
  }

  gameResult = userChoice => {
    const {choiceList} = this.props
    const winner = {
      ROCK: 'SCISSORS',
      SCISSORS: 'PAPER',
      PAPER: 'ROCK',
    }
    const opponentChoice =
      choiceList[Math.floor(Math.random() * choiceList.length)]

    if (winner[userChoice.id] === opponentChoice.id) {
      this.setState(prev => ({
        result: res.won,
        score: prev.score + 1,
        resultView: true,
        userChoiceImg: userChoice.imageUrl,
        opponentChoiceImg: opponentChoice.imageUrl,
      }))
    } else if (winner[opponentChoice.id] === userChoice.id) {
      this.setState(prev => ({
        result: res.lost,
        score: prev.score - 1,
        resultView: true,
        userChoiceImg: userChoice.imageUrl,
        opponentChoiceImg: opponentChoice.imageUrl,
      }))
    } else {
      this.setState({
        result: res.draw,
        resultView: true,
        userChoiceImg: userChoice.imageUrl,
        opponentChoiceImg: opponentChoice.imageUrl,
      })
    }
  }

  gameView = () => {
    const {choiceList} = this.props
    return (
      <GameView>
        <GameButtonsList>
          <div>
            <GameButton
              onClick={this.clickRock}
              data-testid="rockButton"
              key={choiceList[0].id}
            >
              <ButtonImg src={choiceList[0].imageUrl} alt={choiceList[0].id} />
            </GameButton>
            <GameButton
              onClick={this.clickScissor}
              data-testid="scissorsButton"
              key={choiceList[1].id}
            >
              <ButtonImg src={choiceList[1].imageUrl} alt={choiceList[1].id} />
            </GameButton>
          </div>
          <GameButton
            onClick={this.clickPaper}
            data-testid="paperButton"
            key={choiceList[2].id}
          >
            <ButtonImg src={choiceList[2].imageUrl} alt={choiceList[2].id} />
          </GameButton>
        </GameButtonsList>
      </GameView>
    )
  }

  resultView = () => {
    const {result, userChoiceImg, opponentChoiceImg} = this.state
    return (
      <ResultView>
        <ResultBox>
          <ResultInfo>
            <ResultDes>YOU</ResultDes>
            <ButtonImg src={userChoiceImg} alt="your choice" />
          </ResultInfo>
          <ResultInfo>
            <ResultDes>OPPONENT</ResultDes>
            <ButtonImg src={opponentChoiceImg} alt=" opponent choice" />
          </ResultInfo>
        </ResultBox>
        <Result>{result}</Result>
        <ResultButton type="button" onClick={this.restart}>
          Play Again
        </ResultButton>
      </ResultView>
    )
  }

  render() {
    const {resultView, score} = this.state
    return (
      <Container>
        <ResponseContainer>
          <Header score={score} />
          {resultView ? this.resultView() : this.gameView()}
          <Popup modal trigger={<RuleButton type="button">Rules</RuleButton>}>
            {close => (
              <ModelContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine size="30" color="#616e7c" />
                </CloseButton>

                <RuleImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ModelContainer>
            )}
          </Popup>
        </ResponseContainer>
      </Container>
    )
  }
}
export default RockPaperScissor
