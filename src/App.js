import { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Question from './components/Question';
import './App.css';

function App() {
  const [splash, setSplash] = useState(true);
  const [quizContent, setQuizContent] = useState([]);
  const [tallyPoints, settallyPoints] = useState({
    correctAnswers: 0,
    submitted: false,
  });
  const [userAnswers, setUserAnswers] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
  });

  async function getQuizContent() {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple'
    );
    const data = await res.json();
    setQuizContent(data.results);
  }

  useEffect(() => {
    getQuizContent();
  }, []);

  const removeSplash = () => {
    setSplash(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

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
    if (!tallyPoints.submitted) {
      for (let i = 0; i < quizContent.length; i++) {
        if (userAnswers[i] === quizContent[i].correct_answer) {
          settallyPoints((prev) => {
            return {
              ...prev,
              correctAnswers: prev.correctAnswers + 1,
            };
          });
        }
      }

      settallyPoints((prev) => {
        return {
          ...prev,
          submitted: true,
        };
      });
    } else {
      getQuizContent();
      setUserAnswers({
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
      });
      settallyPoints(() => {
        return {
          correctAnswers: 0,
          submitted: false,
        };
      });
    }
  };

  return (
    <div className='App'>
      {splash ? (
        <Splash handleClick={removeSplash} />
      ) : (
        <div>
          {quizElement}
          {tallyPoints.submitted ? (
            <p>{`You scored ${tallyPoints.correctAnswers}/5 correct answers`}</p>
          ) : (
            ''
          )}
          <button className='btn btn-filled' onClick={checkAnswers}>
            {tallyPoints.submitted ? `Play Again` : `Check Answers`}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
