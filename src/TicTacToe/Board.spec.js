import { shallow, mount, render } from 'enzyme';

import Board from './Board';
import Square from './Square';

describe('<Board />', () => {
  describe('when shallowly rendered', () => {
    const wrapper = shallow(<Board />);
    it('should be defined', () => {
      expect(wrapper).toBeDefined();
    });
    it('should render 9 <Square /> components', () => {
      expect(wrapper.find(Square)).toHaveLength(9);
    });
    it('should render a default status', () => {
      expect(wrapper.find('.status').text()).toContain('Next player');
    });
    it('should simulate click events', () => {
      wrapper
        .find(Square)
        .at(0)
        .simulate('click');
      expect(wrapper.find('.status').text()).toContain('O');
    });
    describe('when a square is clicked on', () => {
      it("should alternate rendering an 'X' and 'O'", () => {
        wrapper
          .find(Square)
          .at(0)
          .simulate('click');
        expect(wrapper.find('.status').text()).toContain('O');

        wrapper
          .find(Square)
          .at(1)
          .simulate('click');
        expect(wrapper.find('.status').text()).toContain('X');
      });
    });
  });

  describe('when fully rendered', () => {
    const wrapper = mount(<Board />);
    it('should be defined', () => {
      expect(wrapper).toBeDefined();
    });
    it('should simulate click events', () => {
      wrapper
        .find(Square)
        .at(0)
        .simulate('click');
      expect(wrapper.find('.status').text()).toContain('O');
    });
    // wrapper.unmount();
  });

  describe('when statically rendered', () => {
    const wrapper = render(<Board />);
    it('should be defined', () => {
      expect(wrapper).toBeDefined();
    });
    it('renders 9 buttons', () => {
      expect(wrapper.find('button')).toHaveLength(9);
    });
    it('should render a default status', () => {
      expect(wrapper.find('.status').text()).toContain('Next player');
    });
  });
});
