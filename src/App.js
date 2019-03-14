import React, { Component } from 'react';
import {
  View
} from 'react-native';
import WeatherApp from './components/WeatherAppContainer';

export default class App extends Component {
  render() {
    return (
      <View>
        <WeatherApp />
      </View>
    );
  }
}
