import React from 'react';
import {
  View, Text, AppRegistry, StyleSheet, TouchableHighlight
} from 'react-native';

const WeatherCard = props => (
  <TouchableHighlight
    style={styles.card}
    underlayColor="white"
    onPress={() => props.navigation.navigate('Details', { city: props.city })}
  >
    <View>
      <Text style={styles.cityname}>{props.city.cityname}</Text>
      <Text style={styles.temp}>Tempreture: {props.city.temp} C</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D0D0D0',
    padding: 10,
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
