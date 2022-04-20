import { useState, useEffect } from 'react';
import '../styles/Quiz.css';

const Quiz = ({ quizContent }) => {
  console.log(quizContent);

  return (
    <div>
      <h2 className='question'>{quizContent[0].question}</h2>
      <ul className='answers'>
        <li>
          <input type='radio' name='answer' id='answer1' />
          <label htmlFor='answer1'>{quizContent[0].correct_answer}</label>
        </li>
        <li>
          <input type='radio' name='answer' id='answer2' />
          <label htmlFor='answer2'>{quizContent[0].incorrect_answers[0]}</label>
        </li>
        <li>
          <input type='radio' name='answer' id='answer3' />
          <label htmlFor='answer3'>{quizContent[0].incorrect_answers[1]}</label>
        </li>
        <li>
          <input type='radio' name='answer' id='answer4' />
          <label htmlFor='answer4'>{quizContent[0].incorrect_answers[2]}</label>
        </li>
      </ul>

      <button className='btn btn-filled'>Check Answers</button>
    </div>
  );
};

export default Quiz;
