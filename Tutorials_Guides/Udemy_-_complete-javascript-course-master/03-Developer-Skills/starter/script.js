// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // 3.Fix the bug - added "Number" to convert string '10' to a number
    value: Number(prompt('Degrees celsius:')),
  };

  // 2.Find the bug
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value); // code ok up til here
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1.Identify bug
console.log(measureKelvin());
