// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Activ8</h1>
      <p>Your personalized activation and recovery routines for runners.</p>
      <div>
        <h2>Choose Your Routine:</h2>
        <Link to="/activation">
          <button>Activation Routine</button>
        </Link>
        <Link to="/recovery">
          <button>Recovery Routine</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to Activ8</h1>
//       <p>Your personalized activation and recovery routines for runners.</p>
//     </div>
//   );
// };

// export default Home;
