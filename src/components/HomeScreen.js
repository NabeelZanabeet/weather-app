import React from 'react';
import {
  View, Text, AppRegistry, Button, FlatList
} from 'react-native';
import mockWeatherList from '../mockData';
import WeatherCard from './WeatherCard';

const HomeScreen = props => (
  <View>
    <Text>Home Screen</Text>
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

export default HomeScreen;
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
