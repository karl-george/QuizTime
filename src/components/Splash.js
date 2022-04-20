import '../styles/Splash.css';

const Splash = ({ handleClick }) => {
  return (
    <div>
      <h1 className='splash-title'>Quiz Time</h1>
      <p className='splash-info'>
        A quick fun quiz to pass the time and help you learn
      </p>
      <button className='splash-btn' onClick={handleClick}>
        Start Quiz
      </button>
    </div>
  );
};

export default Splash;
