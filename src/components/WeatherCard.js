import React from 'react';
import {
  View, Text, AppRegistry
} from 'react-native';

const WeatherCard = props => (
  <View>
    <Text>{props.item.cityname}</Text>
    <Text>Tempreture: {props.item.temp} C</Text>
  </View>
);

export default WeatherCard;
AppRegistry.registerComponent('WeatherCard', () => WeatherCard);
