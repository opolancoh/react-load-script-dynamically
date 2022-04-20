import React from "react";

const MyComponent = ({ title }) => {
  // eslint-disable-next-line no-undef
  var evens = _.filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (num) {
    return num % 2 === 0;
  });

  return (
    <>
      <h1>Script Loaded on {title}</h1>
      <ul>
        {evens.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default MyComponent;
