import React from 'react';

import Intro from './Intro.jsx';
import Carousel from './Carousel.jsx';

const App = () => {
  console.log('render');

  return (
    <div>
      <Intro/>
      <Carousel/>
    </div>
  );
};

export default App;
