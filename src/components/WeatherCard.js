import React from 'react';
import {
  View, Text, AppRegistry, StyleSheet
} from 'react-native';

const WeatherCard = props => (
  <View style={styles.card}>
    <Text style={styles.cityname}>{props.item.cityname}</Text>
    <Text style={styles.temp}>Tempreture: {props.item.temp} C</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D0D0D0',
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    margin: 20
  },
  cityname: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  temp: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  }
});

export default WeatherCard;
AppRegistry.registerComponent('WeatherCard', () => WeatherCard);
