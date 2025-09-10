import React from 'react';
import { useParams } from 'react-router-dom';

const adviceData = {
  1: { do: ['Take folic acid', 'Eat healthy'], dont: ['Avoid alcohol', 'Avoid smoking'] },
  2: { do: ['Regular check-ups'], dont: ['No heavy lifting'] },
  3: { do: ['Light exercise'], dont: ['Avoid stress'] },
  4: { do: ['Increase iron intake'], dont: ['Avoid junk food'] },
  5: { do: ['Stay hydrated'], dont: ['Don’t skip meals'] },
  6: { do: ['Practice breathing'], dont: ['Avoid too much caffeine'] },
  7: { do: ['Attend prenatal classes'], dont: ['Avoid raw food'] },
  8: { do: ['Prepare hospital bag'], dont: ['Avoid late-night stress'] },
  9: { do: ['Stay calm and ready'], dont: ['Avoid over-exertion'] },
};

const PregnancyAdvice = () => {
  const { month } = useParams();
  const info = adviceData[month];

  if (!info) return <h2>No advice available for this month</h2>;

  return (
    <div style={{ padding: '20px', width: '60%', margin: 'auto' }}>
      <h1>Month {month} Advice</h1>
      <h2>✅ Things to Do:</h2>
      <ul>{info.do.map((item, index) => <li key={index}>{item}</li>)}</ul>
      <h2>❌ Things to Avoid:</h2>
      <ul>{info.dont.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
};

export default PregnancyAdvice;
