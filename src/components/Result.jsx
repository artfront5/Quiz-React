import React from 'react';
import '../index.scss';

function Result({ correct, questions }) {
  return (
    <div className="result">
      <img src="https://i.gifer.com/FSKI.gif" alt="r" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}
export default Result;
