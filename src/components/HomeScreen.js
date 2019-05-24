/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  View, Text, AppRegistry, FlatList, StyleSheet, TouchableHighlight
} from 'react-native';
import WeatherCard from './WeatherCard';
import PlusIcon from '../icons/PlusIcon';
import InputCityModal from './InputCityModal';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const {
      cities, navigation, deleteCity, addCity
    } = this.props;
    const { modalVisible } = this.state;
    const { setModalVisible } = this;
    return (
      <View>
        <Text style={styles.screen_title}>Home Screen</Text>
        <TouchableHighlight
          style={styles.plus_icon}
          underlayColor="white"
          onPress={() => this.setModalVisible(true)}
        >
          <PlusIcon size={50} color="#900" />
        </TouchableHighlight>
        <InputCityModal
          cities={cities}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          addCity={addCity}
        />
        <FlatList
          style={styles.cities_flat_list}
          data={cities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={
            ({ item }) => (
              <WeatherCard
                city={item}
                citiesCount={cities.length}
                navigation={navigation}
                deleteCity={deleteCity}
              />
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen_title: {
    margin: 10,
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  cities_flat_list: {
    height: 500
  },
  plus_icon: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
