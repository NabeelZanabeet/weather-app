import React from 'react';
import {
  View, ScrollView, Text, AppRegistry, FlatList, StyleSheet
} from 'react-native';
import WeatherCard from './WeatherCard';

const HomeScreen = props => (
  <View>
    <Text style={styles.screen_title}>Home Screen</Text>
    <ScrollView style={styles.scroll_view}>
      <FlatList
        data={props.cities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={
          ({ item }) => (
            <WeatherCard
              city={item}
              citiesCount={props.cities.length}
              navigation={props.navigation}
              deleteCity={props.deleteCity}
            />
          )
        }
      />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  screen_title: {
    margin: 10,
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  scroll_view: {
    height: 500
  }
});

export default HomeScreen;
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
