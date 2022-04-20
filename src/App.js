import { useState } from 'react';
import Splash from './components/Splash';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [splash, setSplash] = useState(true);

  const removeSplash = () => {
    setSplash(false);
  };

  return (
    <div className='App'>
      {splash ? <Splash handleClick={removeSplash} /> : <Quiz />}
    </div>
  );
}

export default App;
