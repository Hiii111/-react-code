import React from 'react';

export default function CelsiusInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>Enter temperature in Celsius:</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}