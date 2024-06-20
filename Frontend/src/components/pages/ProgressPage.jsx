import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgressPage = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get('/api/progress');
        setProgress(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div>
      <h2>Progress Page</h2>
      <ul>
        {progress.map((entry) => (
          <li key={entry.date}>
            {entry.date}: {entry.weight} kg, {entry.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressPage;
