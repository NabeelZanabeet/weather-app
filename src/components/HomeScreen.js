import React from 'react';
import {
  View, Text, AppRegistry, Button
} from 'react-native';

const HomeScreen = props => (
  <View>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate('Details')}
    />
  </View>
);

export default HomeScreen;
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
