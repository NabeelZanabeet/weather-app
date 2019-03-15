
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { API_BASE_URL, API_KEY, DEAFULT_CITIY_LIST } from '../ApiConfig';

const AppNavigator = createSwitchNavigator(
  {
    Home: {
      screen: ({ screenProps, navigation }) => (
        <HomeScreen {...screenProps} navigation={navigation} />
      )
    },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

  componentDidMount() {
    DEAFULT_CITIY_LIST.map(city => (
      this.requestCityForcast(city.id)
    ));
  }

  requestCityForcast = cityId => {
    fetch(API_BASE_URL + cityId + API_KEY)
      .then(response => response.json())
      .then(res => {
        this.setState({ cities: this.state.cities.concat(res) });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  deleteCity = id => {
    this.setState({ cities: this.state.cities.filter(city => (id !== city.id)) });
  }

  addCity = id => {
    this.requestCityForcast(id);
  }

  render() {
    return (
      <View>
        <Text style={styles.app_title}> Weather App </Text>
        <AppContainer screenProps={{
          cities: this.state.cities,
          deleteCity: this.deleteCity,
          addCity: this.addCity
        }}
        />
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
  },
  error: {
    marginTop: 20,
    padding: 20,
    fontSize: 20,
    textAlign: 'center'
  }
});
