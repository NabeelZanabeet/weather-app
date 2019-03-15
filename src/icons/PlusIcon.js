import React from 'react';
import { AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlusIcon = props => (
  <Icon name="plus-circle" {...props} />
);

export default PlusIcon;
AppRegistry.registerComponent('PlusIcon', () => PlusIcon);
