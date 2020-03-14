import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {
    super(props) ;
    const valuesArray = this.createNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
      numQuestions : 0,
      numCorrect : 0,
    };
  }
  createNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };

  updateState = newEquation => {
    this.setState(currState => ({
      value1: newEquation[0],
      value2: newEquation[1],
      value3: newEquation[2],
      proposedAnswer: newEquation[3],
    }));
  };
  checkAnswer = (answer) => {
    {(this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer) === answer ? (
      this.setState((currentState) => ({
        numCorrect : currentState.numCorrect + 1,
        numQuestions: currentState.numQuestions + 1,
      }))) : (
      this.setState((currentState) => ({
        numQuestions: currentState.numQuestions + 1,
      })))
     const newEquation = this.createNewQuestion();
     this.updateState(newEquation);
    }
  }
  render () {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick = {() => this.checkAnswer(true)}>True</button>
        <button onClick = {() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
      </div>
    );
  }
}

export default Game;