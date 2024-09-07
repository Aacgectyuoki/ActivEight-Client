// src/pages/ActivationRoutine.js
import React, { useState } from 'react';

// Sample exercises data (can be fetched from an API)
const exercises = [
  { id: 1, name: 'DB Pullover', description: 'A T-spine and chest mobility exercise used to counteract the effects of prolonged sitting.' },
  { id: 2, name: 'Trap-3 Raise', description: 'An ATG exercise targeting the traps with a 1-second hold at the top for better activation.' },
  { id: 3, name: 'Cable Pulldown', description: 'Isometric lat pulldown using a cable machine to strengthen the back and lats.' },
  { id: 4, name: 'Isometric Seated Calf Raise Hold', description: 'Hold a seated calf raise to build strength in the calves.' },
  { id: 5, name: 'Isometric Standing Calf Raise Hold W/ Knee Lift', description: 'Hold a standing calf raise while lifting one knee to engage balance and calf strength.' },
  { id: 6, name: 'Ankle Circles', description: 'Rotate the ankles to improve mobility and strength around the ankle joint.' },
  { id: 7, name: 'Towel Scrunches', description: 'Strengthen your feet by scrunching a towel with your toes to improve grip and foot stability.' },
  { id: 8, name: 'Theraband Scrunches', description: 'Use a Theraband to perform resistance toe scrunches, enhancing foot strength.' },
  { id: 9, name: 'Lunge W/ Twist', description: 'Dynamic lunges combined with a torso twist to engage the core and improve mobility.' },
  { id: 10, name: 'McGill Curlup', description: 'A core exercise targeting deep abdominal muscles without stressing the lower back.' },
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
