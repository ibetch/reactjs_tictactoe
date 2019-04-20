import { shallow, mount, render } from 'enzyme';

import Board from './Board';

describe('The game board', () => {
  describe('when shallowly rendered', () => {
    it('should be defined', () => {
      const wrapper = shallow(<Board />);
      expect(wrapper).toBeDefined();
    });
  });
  describe('when fully rendered', () => {
    it('should be defined', () => {
      const wrapper = mount(<Board />);
      expect(wrapper).toBeDefined();
    });
  });
  describe('when statically rendered', () => {
    it('should be defined', () => {
      const wrapper = render(<Board />);
      expect(wrapper).toBeDefined();
    });
  });
});
