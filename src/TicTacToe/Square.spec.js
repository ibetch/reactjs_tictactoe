import { shallow, mount, render } from 'enzyme';

import Square from './Square';

describe('The Square component', () => {
  describe('when shallowly rendered', () => {
    it('should be defined', () => {
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
      const buttonValue = 'button value';
      const wrapper = shallow(<Square value={buttonValue} />);
      expect(wrapper.text()).toEqual(buttonValue);
    });
  });

  describe('when fully rendered', () => {
    it('should be defined', () => {
      const wrapper = mount(<Square />);
      expect(wrapper).toBeDefined();
    });

    it('simulates click events', () => {
      const mockClick = jest.fn();
      const wrapper = mount(<Square onClick={mockClick} />);
      wrapper.find('button').simulate('click');
      expect(mockClick.mock.calls.length).toEqual(1);
    });

    it('allows us to set props', () => {
      const wrapper = mount(<Square value="baz" />);
      expect(wrapper.props().value).toEqual('baz');
      wrapper.setProps({ value: 'foo' });
      expect(wrapper.props().value).toEqual('foo');
    });
  });

  describe('when statically rendered', () => {
    it('should be defined', () => {
      const wrapper = render(<Square />);
      expect(wrapper).toBeDefined();
    });

    it('renders a button tag', () => {
      const wrapper = render(<Square />);
      expect(wrapper.find('button')).toBeDefined();
    });

    it('renders the value as text', () => {
      const buttonValue = 'button value';
      const wrapper = render(<Square value={buttonValue} />);
      expect(wrapper.text()).toEqual(buttonValue);
    });
  });
});
