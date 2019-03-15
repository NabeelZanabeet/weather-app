import React from 'react';
import { AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TrashIcon = () => (
  <Icon name="trash" size={30} color="#282828" />
);

export default TrashIcon;
AppRegistry.registerComponent('TrashIcon', () => TrashIcon);
