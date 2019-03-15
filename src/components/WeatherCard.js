import React from 'react';
import {
  View, Text, AppRegistry, StyleSheet, TouchableHighlight
} from 'react-native';
import TrashIcon from '../icons/TrashIcon';

const WeatherCard = props => {
  const {
    citiesCount, deleteCity, navigation, city
  } = props;
  return (
    <View style={styles.card}>
      {(citiesCount > 1)
        && (
          <TouchableHighlight
            style={styles.touchable_icon}
            onPress={() => deleteCity(city.id)}
          >
            <TrashIcon size={30} color="#282828" />
          </TouchableHighlight>
        )
      }
      <TouchableHighlight
        underlayColor="white"
        style={styles.touchable_city}
        onPress={() => navigation.navigate('Details', { city })}
      >
        <View>
          <Text style={styles.cityname}>{city.name}</Text>
          <Text style={styles.temp}>Temperature: {parseInt(city.main.temp - 273, 10)} C</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D0D0D0',
    padding: 5,
    borderRadius: 20,
    margin: 20
  },
  touchable_city: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5
  },
  touchable_icon: {
    margin: 10,
    backgroundColor: '#D0D0D0',
    alignSelf: 'center'
  },
  cityname: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  temp: {
    fontSize: 15,
    color: 'blue',
    textAlign: 'center',
  }
});

export default WeatherCard;
AppRegistry.registerComponent('WeatherCard', () => WeatherCard);
