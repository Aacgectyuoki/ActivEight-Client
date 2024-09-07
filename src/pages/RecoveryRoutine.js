// src/pages/RecoveryRoutine.js
import React, { useState } from 'react';

const RecoveryRoutine = () => {
  // Sample exercises data (can be fetched from an API)
  const exercises = [
    { id: 1, name: 'Foam Rolling', description: 'Self-myofascial release for muscle relaxation.' },
    { id: 2, name: 'Static Hamstring Stretch', description: 'Hold to stretch hamstrings and reduce tension.' },
    { id: 3, name: 'Diaphragmatic Breathing', description: 'Deep breathing exercises to promote recovery.' },
    { id: 4, name: 'Jefferson Curl', description: 'Controlled spinal flexion exercise to increase hamstring and lower back flexibility.' },
    { id: 5, name: 'Couch Stretch', description: 'Deep stretch for the hip flexors and quadriceps, beneficial for those who sit often.' },
    { id: 6, name: 'Pigeon Pose', description: 'Yoga pose to open the hips and stretch the glutes and piriformis.' },
    { id: 7, name: 'Standing Pancake (Groin Stretch)', description: 'Stretch for the adductors and hamstrings by bending forward in a wide stance.' },
    { id: 8, name: 'Butterfly Stretch', description: 'Seated stretch to open the hips and groin by bringing the soles of the feet together.' },
    { id: 9, name: 'Child\'s Pose', description: 'Restorative yoga pose for stretching the lower back and relaxing the body.' },
    { id: 10, name: 'Cat-Cow Stretch', description: 'Dynamic yoga sequence for spinal flexibility and mobility.' },
    { id: 11, name: 'Figure 4 Stretch', description: 'Stretches the glutes and piriformis by crossing one leg over the other in a seated or supine position.' },
    { id: 12, name: 'Thoracic Spine Rotation', description: 'Rotational movement to improve mobility in the thoracic spine and reduce upper back tightness.' },
    { id: 13, name: 'Hip Flexor Stretch', description: 'Lunge-based stretch to lengthen the hip flexors and improve hip mobility.' },
    { id: 14, name: 'Seated Forward Fold', description: 'Stretch for the hamstrings and lower back by reaching forward while seated.' },
    { id: 15, name: 'Wall Angels', description: 'Posture exercise to improve shoulder mobility and upper back strength.' },
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
