import styled from 'styled-components'

export const Container = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 10px;
  @media screen and (min-width:768px){
      display:flex;
      flex-direction;column;
      justify-content:center;
      align-items:center;
      padding:40px;
      height:auto
  }
`

export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 90%;
    max-width: 1100px;
  }
`

export const GameView = styled.div``

export const GameButtonsList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const GameButton = styled.button`
  background-color: transparent;
  border: none;
`

export const ButtonImg = styled.img`
  height: 170px;
  width: 170px;
`
export const RuleButton = styled.button`
  background-color: white;
  color: #223a5f;
  align-self: flex-end;
  font-family: 'Bree Serif';
  border-width:0px;
  font-size: 18px;
  height:30px;
  width:70px
  border-radius: 10px;
`
export const RuleImg = styled.img`
  width: 80%;
  align-self: center;
  max-width: 700px;
`
export const CloseButton = styled.button`
  align-self: flex-end;
`
export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: white;
  border-width: 20px;
  border-radius: 10px;
  max-width: 1100px;
  flex-grow: 1;
`
export const ResultBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const ResultView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const ResultInfo = styled.div`
  text-align: center;
  margin: 20px;
`
export const ResultDes = styled.p`
  font-family: 'Roboto';
  color: white;
  font-size: ${props => (props.result ? '60px' : '20px')};
  font-weight: 500;
`
export const ResultButton = styled.button`
  background-color: white;
  color: #223a5f;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 130px;
  font-size: 20px;
  font-weight: 500;
`
export const Result = styled.p`
  font-family: 'Roboto';
  color: white;
  font-size: 35px;
  margin-bottom: 8px;
  font-weight: 500;
`
