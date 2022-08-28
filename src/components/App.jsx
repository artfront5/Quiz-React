import React from 'react';
import '../index.scss';
import Game from './Game';
import Result from './Result';
import { questions } from '../mock';

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  console.log(question);
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          questions={questions}
          step={step}
          onClickVariant={onClickVariant}
          question={question}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
