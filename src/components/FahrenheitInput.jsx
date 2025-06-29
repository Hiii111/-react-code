import React from 'react';

export default function FahrenheitInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>Enter temperature in Fahrenheit:</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}