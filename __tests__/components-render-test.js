// Note: test renderer must be required after react-native.
import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';
import HomeScreen from '../src/components/HomeScreen';
import DetailedWeatherCard from '../src/components/DetailedWeatherCard';
import InputCityModal from '../src/components/InputCityModal';
import NotesSection from '../src/components/NotesSection';

it('InputCityModal should render snapshot', () => {
  const addedCities = [{
    id: 1819729,
    name: 'Hong Kong',
    country: 'HK',
    coord: {
      lon: 114.157692,
      lat: 22.285521
    }
  }];
  const component = shallow(<InputCityModal modalVisible cities={addedCities} />);
  expect(component).toMatchSnapshot();
});

it('NotesSection should render snapshot', () => {
  const notes = [{
    id: 1,
    text: 'test note'
  }];
  const component = shallow(<NotesSection notes={notes} />);
  expect(component).toMatchSnapshot();
});

it('HomeScreen should render snapshot', () => {
  const component = shallow(<HomeScreen />);
  expect(component).toMatchSnapshot();
});

it('DetailedWeatherCard should render snapshot', () => {
  const city = {
    name: 'London',
    main: {
      temp: 20,
      humidity: 10
    },
    wind: {
      speed: 20
    }
  };
  const component = shallow(<DetailedWeatherCard city={city} />);
  expect(component).toMatchSnapshot();
});

it('App should render snapshot', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
