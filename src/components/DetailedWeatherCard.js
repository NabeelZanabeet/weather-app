import React from 'react';
import {
  View, Text, AppRegistry, StyleSheet
} from 'react-native';

const DetailedWeatherCard = props => (
  <View style={styles.card}>
    <Text style={styles.cityname}>{props.city.name}</Text>
    <Text style={styles.detail}>Temperature: {parseInt(props.city.main.temp - 273, 10)} C</Text>
    <Text style={styles.detail}>Humidity: {props.city.main.humidity}</Text>
    <Text style={styles.detail}>Temp Max: {parseInt(props.city.main.temp_min - 273, 10)} C</Text>
    <Text style={styles.detail}>Temp Max: {parseInt(props.city.main.temp_max - 273, 10)} C</Text>
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
    margin: 10
  },
  detail: {
    fontSize: 15,
    color: 'blue',
    textAlign: 'center',
    margin: 5
  }
});

export default DetailedWeatherCard;
AppRegistry.registerComponent('DetailedWeatherCard', () => DetailedWeatherCard);
