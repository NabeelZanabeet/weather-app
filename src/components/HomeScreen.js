import React from 'react';
import {
  View, Text, AppRegistry, Button, FlatList
} from 'react-native';
import mockWeatherList from '../mockData';

const HomeScreen = props => (
  <View>
    <Text>Home Screen</Text>
    <FlatList
      data={mockWeatherList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={
        ({ item }) => (
          <View>
            <Text>{item.cityname}</Text>
            <Text>{item.temp}</Text>
          </View>
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
