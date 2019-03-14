import React from 'react';
import {
  View, Text, AppRegistry, Button
} from 'react-native';

const DetailsScreen = props => (
  <View>
    <Text>Details Screen</Text>
    <Button
      title="Back to Home"
      onPress={() => props.navigation.navigate('Home')}
    />
  </View>
);

export default DetailsScreen;
AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen);
