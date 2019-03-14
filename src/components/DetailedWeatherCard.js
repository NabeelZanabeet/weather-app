import React from 'react';
import {
  View, Text, AppRegistry, StyleSheet
} from 'react-native';

const DetailedWeatherCard = props => (
  <View style={styles.card}>
    <Text style={styles.cityname}>{props.city.cityname}</Text>
    <Text style={styles.detail}>Tempreture: {props.city.temp} K</Text>
    <Text style={styles.detail}>Humidity: {props.city.humidity}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D0D0D0',
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    margin: 15
  },
  cityname: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  detail: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  }
});

export default DetailedWeatherCard;
AppRegistry.registerComponent('DetailedWeatherCard', () => DetailedWeatherCard);
