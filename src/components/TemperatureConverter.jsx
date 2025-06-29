import React, { useState } from 'react';
import CelsiusInput from './CelsiusInput';
import FahrenheitInput from './FahrenheitInput';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(value, convertFn) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) return '';
  return convertFn(input).toFixed(2);
}

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (value) => {
    setTemperature(value);
    setScale('c');
  };

  const handleFahrenheitChange = (value) => {
    setTemperature(value);
    setScale('f');
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <CelsiusInput temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <FahrenheitInput temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
    </div>
  );
}