import { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [splash, setSplash] = useState(true);
  const [quizContent, setQuizContent] = useState([]);

  useEffect(() => {
    async function getQuizContent() {
      const res = await fetch(
        'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple'
      );
      const data = await res.json();
      setQuizContent(data.results);
    }

    getQuizContent();
  }, []);

  const removeSplash = () => {
    setSplash(false);
  };

  return (
    <div className='App'>
      {splash ? (
        <Splash handleClick={removeSplash} />
      ) : (
        <Quiz quizContent={quizContent} />
      )}
    </div>
  );
}

export default App;
