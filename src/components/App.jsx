// src/components/App.jsx

import React from 'react';

export default function App(props) {
  return (
    <div>
      <h1>React App</h1>
      {props.children}
    </div>
  );
}
App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
