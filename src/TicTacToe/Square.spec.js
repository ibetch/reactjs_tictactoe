import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Square from './Square';

Enzyme.configure({ adapter: new Adapter() });

describe('The Square component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Square />);
    expect(wrapper).toBeDefined();
  });
});
