import React from 'react';
import './WinPredictor.css';

const WinPredictor = () => {
  return (
    <div className="container">
      <h1>Election Win Predictor</h1>

      {/* Science with Ruchira Survey Section */}
      <div className="survey-section survey-science">
        <h2>Science with Ruchira YouTube Channel Survey</h2>
        <p>Participant Count: 87,000</p>
        <p>Survey Results:</p>
        <ul>
          <li>Anura Kumara Dissanayake - 79%</li>
          <li>Ranil Wickramasinghe - 13%</li>
          <li>Sajith Premadasa - 5%</li>
          <li>Namal Rajapaksha - 2%</li>
        </ul>
        <p>Assumptions:</p>
        <ul>
          <li>Sinhala speaking participants with O/L qualifications or higher qualifications.</li>
          <li>Sinhala speaking population is a percentage of the Sinhalese population.</li>
        </ul>
        <h3>Win Predictions (Worst-Case Scenarios for Leading Candidate):</h3>
        <div className="win-prediction">
          <p>1. Minority vote: 3%, Sinhala without O/L or higher qualification: 33% - <strong>38% win</strong></p>
          <p>2. Minority vote: 3%, Sinhala without O/L or higher qualification: 50% - <strong>46% win</strong></p>
          <p>3. Minority vote: 10%, Sinhala without O/L or higher qualification: 33% - <strong>39% win</strong></p>
          <p>4. Minority vote: 10%, Sinhala without O/L or higher qualification: 50% - <strong>49% win</strong></p>
        </div>
      </div>

      {/* Numbers.lk Survey Section */}
      <div className="survey-section survey-numbers">
        <h2>Numbers.lk Survey</h2>
        <p>Total Responses: 3,900</p>
        <p>Survey Results:</p>
        <ul>
          <li>Anura Kumara Dissanayake - 43%</li>
          <li>Ranil Wickramasinghe - 27%</li>
          <li>Sajith Premadasa - 22%</li>
          <li>Namal Rajapaksha - 3%</li>
          <li>Undecided votes - 2%</li>
          <li>Other votes - 2%</li>
        </ul>
        <h3>Second Round Results:</h3>
        <ul>
          <li>Ranil Wickramasinghe - 31.25%</li>
          <li>No second vote - 27.34%</li>
          <li>Anura Kumara Dissanayake - 25.78%</li>
          <li>Undecided votes - 13.28%</li>
          <li>Namal Rajapaksha - 0.78%</li>
          <li>Other votes - 1.56%</li>
        </ul>
        <p>Prediction:</p>
        <p>Anura Kumara Dissanayake is expected to get close to 46% votes in the first round and remain on top after the second round.</p>
      </div>
    </div>
  );
};

export default WinPredictor;
