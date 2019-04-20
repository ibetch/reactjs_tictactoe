import React from 'react';

import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Square from './Square';

Enzyme.configure({ adapter: new Adapter() });

describe('The Square component', () => {
  describe('when shallowly rendered', () => {
    it('should exist', () => {
      const wrapper = shallow(<Square />);
      expect(wrapper).toBeDefined();
    });
    it('simulates click events', () => {
      const mockClick = jest.fn();
      const wrapper = shallow(<Square onClick={mockClick} />);

      wrapper.find('button').simulate('click');
      expect(mockClick.mock.calls.length).toEqual(1);
    });
    it('renders props when passed in', () => {
      const mockValue = 'X';
      const wrapper = shallow(<Square value={mockValue} />);

      expect(wrapper.text()).toEqual(mockValue);
    });
  });
});
