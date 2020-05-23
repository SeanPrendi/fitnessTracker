/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Settings from '../pages/UserSettingsPage';
import data from '../mockdata/userSettings.json';

Enzyme.configure({ adapter: new Adapter() });
global.shallow = Enzyme.shallow;

describe('All exercise bars present', () => {
  // Set up state to avoid dumb enzyme errors
  const origError = console.error;
  const DISALLOWED_ERROR_TAGS = ['incorrect casing'];
  beforeEach(() => {
    console.error = (e) => {
      for (const tag of DISALLOWED_ERROR_TAGS) {
        if (e.toLowerCase().includes(tag.toLowerCase())) {
          continue;
        } else {
          if (!e.toLowerCase().includes('%s')) {
            console.warn(e);
          }
          break;
        }
      }
    };
  });

  afterEach(() => {
    console.error = origError;
  });

  it('Should render all headings', () => {
    const wrapper = shallow(<Settings setPage={() => {}} />);
    expect(wrapper.find('#subheading').length).toBe(Object.keys(data).length);
  });
});
