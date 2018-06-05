import React from 'react';
import { shallow } from 'enzyme';
import * as storage from '@commercetools-local/storage';
import WithProjectKey, {
  WithProjectKeyFromCacheOrUser,
} from './with-project-key';

jest.mock('@commercetools-local/storage');

const createTestProps = props => ({
  user: null,
  render: jest.fn(),
  ...props,
});

describe('rendering', () => {
  let props;
  let wrapper;
  describe('when user is not defined', () => {
    beforeEach(() => {
      props = createTestProps({ user: null });
      wrapper = shallow(<WithProjectKey {...props} />);
    });
    it('should render nothing', () => {
      expect(wrapper.type()).toBe(null);
    });
  });
  describe('when user is defined', () => {
    beforeEach(() => {
      props = createTestProps({ user: { availableProjects: [{ key: 'p1' }] } });
      wrapper = shallow(<WithProjectKey {...props} />);
    });
    it('should render Route for "/"', () => {
      expect(wrapper).toRender({ exact: true, path: '/' });
    });
    it('should render Route for "/account"', () => {
      expect(wrapper).toRender({ path: '/account' });
    });
    it('should render Route for "/:projectKey"', () => {
      expect(wrapper).toRender({ path: '/:projectKey' });
    });
  });

  describe('<WithProjectKeyFromCacheOrUser>', () => {
    describe('when projectKey is not cached in localStorage', () => {
      describe('when the user has no available projects', () => {
        beforeEach(() => {
          storage.get.mockReturnValue(null);
          props = createTestProps({ user: { availableProjects: [] } });
          wrapper = shallow(<WithProjectKeyFromCacheOrUser {...props} />);
        });
        it('should render nothing', () => {
          expect(wrapper.type()).toBe(null);
        });
      });
      describe('when user has at least one available project', () => {
        beforeEach(() => {
          storage.get.mockReturnValue(null);
          props = createTestProps({
            user: { availableProjects: [{ key: 'p1' }] },
          });
          wrapper = shallow(<WithProjectKeyFromCacheOrUser {...props} />);
        });
        it('should call render callback with the first project key from the available projects list', () => {
          expect(props.render).toHaveBeenCalledWith(
            expect.objectContaining({ projectKey: 'p1' })
          );
        });
      });
    });
    describe('when projectKey is cached in localStorage', () => {
      beforeEach(() => {
        storage.get.mockReturnValue('cached-project-key');
        props = createTestProps({ user: { availableProjects: [] } });
        wrapper = shallow(<WithProjectKeyFromCacheOrUser {...props} />);
      });
      it('should call render callback with the cached project key', () => {
        expect(props.render).toHaveBeenCalledWith(
          expect.objectContaining({ projectKey: 'cached-project-key' })
        );
      });
    });
  });
  describe('Route for "/:projectKey"', () => {
    beforeEach(() => {
      props = createTestProps({
        user: { availableProjects: [{ key: 'p1' }] },
      });
      wrapper = shallow(<WithProjectKey {...props} />);
      shallow(
        <div>
          {wrapper.find({ path: '/:projectKey' }).prop('render')({
            match: { params: { projectKey: 'test-1' } },
          })}
        </div>
      );
    });
    it('should call render callback with matched projectKey', () => {
      expect(props.render).toHaveBeenCalledWith(
        expect.objectContaining({ projectKey: 'test-1' })
      );
    });
  });
});
