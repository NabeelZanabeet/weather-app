import React from 'react';
import {
  View, Text, AppRegistry, Button, StyleSheet
} from 'react-native';
import DetailedWeatherCard from './DetailedWeatherCard';
import NotesSection from './NotesSection';

const DetailsScreen = props => {
  const { navigation, addNote, notes } = props;
  return (
    <View>
      <Text style={styles.screen_title}>Details Screen</Text>
      <DetailedWeatherCard city={navigation.getParam('city')} />
      <NotesSection notes={notes} addNote={addNote} />
      <View style={styles.back_btn}>
        <Button
          title="Back"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen_title: {
    margin: 10,
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  back_btn: {
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default DetailsScreen;
AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen);
