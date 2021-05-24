import React from 'react';
import { string } from 'prop-types';

const result = () => (
  <p>Sorry, the page you were trying to view does not exist.</p>
);

result.propTypes = {
  title: string,
};

result.displayName = __filename;

export default result;
