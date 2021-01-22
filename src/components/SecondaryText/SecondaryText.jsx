import React from 'react';
import './SecondaryText.css';

const SecondaryText = (props) => (
  <div className='secondary-text'>
    {props.children}
  </div>
);

export default SecondaryText;
