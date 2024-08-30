import React, { useState } from "react";

function AngleSelector() {
  const [value, setValue] = useState(0);

  const updateValue = (newValue) => {
    // Map the value into the range of 0 to 360 using modulo
    newValue = newValue % 360;
    if (newValue < 0) {
      newValue += 360;
    }
    setValue(newValue);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-left">
          <p>
            <strong>Name:</strong> Ranasinghe S.M.T.S.C.
          </p>
          <p>
            <strong>Registration Number:</strong> E/18/285
          </p>
          <p>
            <strong>Subject:</strong> CO528 - Applied Software Architecture
          </p>
        </div>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Angle Selector Sync Application
        </h2>

        <div className="mb-4">
          <label
            htmlFor="valueInput"
            className="block text-sm font-medium text-gray-700"
          >
            Insert angle value (0 - 360)
          </label>
          <input
            type="number"
            id="valueInput"
            value={value}
            min="0"
            max="360"
            onChange={(e) => updateValue(parseInt(e.target.value) || 0)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <input
            type="range"
            id="valueSlider"
            min="0"
            max="360"
            value={value}
            onChange={(e) => updateValue(parseInt(e.target.value) || 0)}
            className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #007BFF ${
                (value / 360) * 100
              }%, #ddd ${(value / 360) * 100}%)`,
            }}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4 flex-row">
          {[0, 45, 60, 90, 180].map((val) => (
            <label key={val} className="flex items-center w-1/6 cursor-pointer">
              <input
                type="radio"
                name="preset"
                value={val}
                checked={value === val}
                onChange={() => updateValue(val)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">{val}</span>
            </label>
          ))}
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p>
            <strong>Note</strong>
          </p>
          <p className="text-left">
            If you enter greater than 360 or less than 0, it will automatically
            map to an angle between 0 and 360.
          </p>
        </div>

        <div className="text-center text-lg font-medium text-gray-800">
          <p>
            Selected Angle: <strong>{value}°</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AngleSelector;
