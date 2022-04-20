import { useState, useEffect } from 'react';

const Quiz = () => {
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

  console.log(quizContent);
  return <div>Quiz</div>;
};

export default Quiz;
