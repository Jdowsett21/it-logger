import React from 'react';

const DangerButton = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

export default DangerButton;
