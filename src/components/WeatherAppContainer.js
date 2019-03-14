
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        <Text style={styles.app_title}> Weather App </Text>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app_title: {
    margin: 30,
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  }
});
