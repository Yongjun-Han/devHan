import './Css/App.css'
import React from 'react';
import Lottie from 'react-lottie';
import flex from './Lottie/flex.json'

function App() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: flex,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  return (
    <div className="BG">
      <div>
        <Lottie 
          className="lottie"
          options={defaultOptions}
          speed={0.4}
          height={6000}
          width={6000}
          isClickToPauseDisabled={true}
        />
      </div>
    </div>
  );
}

export default App;
