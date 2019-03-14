import React from 'react';
import {
  View, Text, AppRegistry, Button, FlatList, StyleSheet
} from 'react-native';
import mockWeatherList from '../mockData';
import WeatherCard from './WeatherCard';

const HomeScreen = props => (
  <View>
    <Text style={styles.screen_title}>Home Screen</Text>
    <FlatList
      data={mockWeatherList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={
        ({ item }) => (
          <WeatherCard item={item} />
        )
      }
    />
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate('Details')}
    />
  </View>
);

const styles = StyleSheet.create({
  screen_title: {
    margin: 10,
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
});

export default HomeScreen;
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
