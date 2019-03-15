import React from 'react';
import { AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TrashIcon = props => (
  <Icon name="trash" {...props} />
);

export default TrashIcon;
AppRegistry.registerComponent('TrashIcon', () => TrashIcon);
