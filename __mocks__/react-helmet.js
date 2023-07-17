import React from 'react';

const Helmet = (props) => (
  <div data-mock="Helmet">{JSON.stringify(props, null, 2)}</div>
);

export default Helmet;
