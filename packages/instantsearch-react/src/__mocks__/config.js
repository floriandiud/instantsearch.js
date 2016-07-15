/* eslint-env jest, jasmine */

import React from 'react';
import omit from 'lodash/object/omit';

export default mapPropsToConfig => Composed => props => {
  const config = mapPropsToConfig(props);
  if (props.__testConfig) {
    props.__testConfig(config);
  }
  return <Composed {...omit(props, '__testConfig')} />;
};
