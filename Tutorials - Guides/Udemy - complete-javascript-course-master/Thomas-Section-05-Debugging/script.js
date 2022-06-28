const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: prompt("Degrees celcius"),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
