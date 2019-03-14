// Note: test renderer must be required after react-native.
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../src/App';
import HomeScreen from '../src/components/HomeScreen';
import DetailedWeatherCard from '../src/components/DetailedWeatherCard';

it('HomeScreen renders correctly', () => {
  renderer.create(<HomeScreen />);
});

it('HomeScreen should render snapshot', () => {
  const component = shallow(<HomeScreen />);
  expect(component).toMatchSnapshot();
});

it('DetailedWeatherCard renders correctly', () => {
  const city = {
    cityname: 'London',
    temp: 20,
    humidity: 10
  };
  renderer.create(<DetailedWeatherCard city={city} />);
});

it('DetailedWeatherCard should render snapshot', () => {
  const city = {
    cityname: 'London',
    temp: 20,
    humidity: 10
  };
  const component = shallow(<DetailedWeatherCard city={city} />);
  expect(component).toMatchSnapshot();
});

it('App renders correctly', () => {
  renderer.create(<App />);
});

it('App should render snapshot', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
