// src/pages/ActivationRoutine.js
import React, { useState } from 'react';

// Sample exercises data (can be fetched from an API)
const exercises = [
  { id: 1, name: 'Leg Swings', description: 'Dynamic leg swings to improve hip mobility.' },
  { id: 2, name: 'Arm Circles', description: 'Circular arm motions to warm up the shoulders.' },
  { id: 3, name: 'Hip Circles', description: 'Gentle hip circles to lubricate hip joints.' },
];

const ActivationRoutine = () => {
  // State for selected exercises
  const [selectedExercises, setSelectedExercises] = useState([]);

  // Function to handle exercise selection
  const toggleExercise = (exercise) => {
    if (selectedExercises.includes(exercise)) {
      setSelectedExercises(selectedExercises.filter((e) => e.id !== exercise.id));
    } else {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  return (
    <div>
      <h1>Activation Routine</h1>
      <p>Select exercises to create your personalized activation routine:</p>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <input
              type="checkbox"
              checked={selectedExercises.includes(exercise)}
              onChange={() => toggleExercise(exercise)}
            />
            {exercise.name} - {exercise.description}
          </li>
        ))}
      </ul>
      <h2>Your Selected Exercises:</h2>
      <ul>
        {selectedExercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivationRoutine;




// import React from 'react';

// const ActivationRoutine = () => {
//   return (
//     <div>
//       <h1>Activation Routine</h1>
//       <p>Here you can find your personalized activation routine.</p>
//     </div>
//   );
// };

// export default ActivationRoutine;
