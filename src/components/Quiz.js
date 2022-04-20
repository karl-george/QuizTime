import { useState, useEffect } from 'react';
import Question from './Question';
import '../styles/Quiz.css';

const Quiz = ({ quizContent }) => {
  const [userAnswers, setUserAnswers] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    setUserAnswers((prevAnswers) => {
      return {
        ...prevAnswers,
        [name]: value,
      };
    });
  };

  const quizElement = quizContent.map((question_answer, index) => {
    return (
      <Question
        data={question_answer}
        key={index}
        index={index}
        handleChange={handleChange}
      />
    );
  });

  const checkAnswers = () => {
    if (userAnswers[0] === quizContent[0].correct_answer) {
      console.log('BOOM');
    }
  };

  return (
    <div>
      {quizElement}
      <button className='btn btn-filled' onClick={checkAnswers}>
        Check Answers
      </button>
    </div>
  );
};

export default Quiz;
