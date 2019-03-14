
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const AppNavigator = createSwitchNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class WeatherApp extends Component {
  render() {
    return (
      <View>
        <Text> Weather App </Text>
        <AppContainer />
      </View>
    );
  }
}
