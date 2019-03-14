/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mocks from 'react-native-jest-mocks';

mocks.initAll();
Enzyme.configure({ adapter: new Adapter() });
