// src/pages/RecoveryRoutine.js
import React, { useState } from 'react';

const RecoveryRoutine = () => {
  // Sample exercises data (can be fetched from an API)
  const exercises = [
    { id: 1, name: 'Foam Rolling', description: 'Self-myofascial release for muscle relaxation.' },
    { id: 2, name: 'Static Hamstring Stretch', description: 'Hold to stretch hamstrings and reduce tension.' },
    { id: 3, name: 'Diaphragmatic Breathing', description: 'Deep breathing exercises to promote recovery.' },
  ];

  // State for selected exercises
  const [selectedExercises, setSelectedExercises] = useState([]);

  // Function to handle exercise selection
  const toggleExercise = (exercise) => {
    if (selectedExercises.includes(exercise)) {
      setSelectedExercises(selectedExercises.filter((e) => e !== exercise));
    } else {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  return (
    <div>
      <h1>Recovery Routine</h1>
      <p>Select exercises to create your personalized recovery routine:</p>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <input
              type="checkbox"
              checked={selectedExercises.includes(exercise.name)}
              onChange={() => toggleExercise(exercise.name)}
            />
            {exercise.name} - {exercise.description}
          </li>
        ))}
      </ul>
      <h2>Your Selected Exercises:</h2>
      <ul>
        {selectedExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecoveryRoutine;

// import React from 'react';

// const RecoveryRoutine = () => {
//   return (
//     <div>
//       <h1>Recovery Routine</h1>
//       <p>Here you can find your personalized recovery routine.</p>
//     </div>
//   );
// };

// export default RecoveryRoutine;
