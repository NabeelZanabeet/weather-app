import React from 'react';
import {
  View, Text, AppRegistry, Button, StyleSheet
} from 'react-native';

const DetailsScreen = props => (
  <View>
    <Text style={styles.screen_title}>Details Screen</Text>
    <Button
      title="Back to Home"
      onPress={() => props.navigation.navigate('Home')}
    />
  </View>
);

const styles = StyleSheet.create({
  screen_title: {
    margin: 10,
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
});

export default DetailsScreen;
AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen);
