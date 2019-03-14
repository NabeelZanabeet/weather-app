// Note: test renderer must be required after react-native.
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';
import DetailsScreen from '../src/components/DetailsScreen';
import HomeScreen from '../src/components/HomeScreen';

it('DetailsScreen renders correctly', () => {
  renderer.create(<DetailsScreen />);
});

it('HomeScreen renders correctly', () => {
  renderer.create(<HomeScreen />);
});

it('App renders correctly', () => {
  renderer.create(<App />);
});
