const Question = ({ data, index, handleChange, submitted }) => {
  const answers = [];
  answers.push(data.correct_answer);
  data.incorrect_answers.forEach((ans) => {
    answers.push(ans);
  });
  answers.sort();

  return (
    <div>
      <h2 className='question'>{data.question}</h2>
      <ul className='answers'>
        <li>
          <input
            type='radio'
            name={index}
            id={answers[0]}
            onChange={handleChange}
            value={answers[0]}
          />
          <label
            htmlFor={answers[0]}
            className={
              submitted
                ? answers[0] === data.correct_answer
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          >
            {answers[0]}
          </label>
        </li>
        <li>
          <input
            type='radio'
            name={index}
            id={answers[1]}
            onChange={handleChange}
            value={answers[1]}
          />
          <label
            htmlFor={answers[1]}
            className={
              submitted
                ? answers[1] === data.correct_answer
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          >
            {answers[1]}
          </label>
        </li>
        <li>
          <input
            type='radio'
            name={index}
            id={answers[2]}
            onChange={handleChange}
            value={answers[2]}
          />
          <label
            htmlFor={answers[2]}
            className={
              submitted
                ? answers[2] === data.correct_answer
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          >
            {answers[2]}
          </label>
        </li>
        <li>
          <input
            type='radio'
            name={index}
            id={answers[3]}
            onChange={handleChange}
            value={answers[3]}
          />
          <label
            htmlFor={answers[3]}
            className={
              submitted
                ? answers[3] === data.correct_answer
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          >
            {answers[3]}
          </label>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Question;
