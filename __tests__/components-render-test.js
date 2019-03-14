// Note: test renderer must be required after react-native.
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../src/App';
import DetailsScreen from '../src/components/DetailsScreen';
import HomeScreen from '../src/components/HomeScreen';

it('DetailsScreen renders correctly', () => {
  renderer.create(<DetailsScreen />);
});

it('DetailsScreen should render', () => {
  const component = shallow(<DetailsScreen />);
  expect(component).toMatchSnapshot();
});
it('HomeScreen renders correctly', () => {
  renderer.create(<HomeScreen />);
});

it('HomeScreen should render', () => {
  const component = shallow(<HomeScreen />);
  expect(component).toMatchSnapshot();
});

it('App renders correctly', () => {
  renderer.create(<App />);
});

it('App should render', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
