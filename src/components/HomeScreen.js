import React from 'react';
import {
  View, ScrollView, Text, AppRegistry, Button, FlatList, StyleSheet
} from 'react-native';
import mockWeatherList from '../mockData';
import WeatherCard from './WeatherCard';

const HomeScreen = props => (
  <View>
    <Text style={styles.screen_title}>Home Screen</Text>
    <ScrollView style={styles.scroll_view}>
      <FlatList
        data={mockWeatherList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={
          ({ item }) => (
            <WeatherCard item={item} />
          )
        }
      />
    </ScrollView>
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
  },
  scroll_view: {
    height: 500
  }
});

export default HomeScreen;
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
