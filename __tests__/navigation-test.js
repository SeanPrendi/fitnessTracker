/**
 * @jest-environment jsdom
 */

import React from "react";
import Main from "../pages/MainPage";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
global.shallow = Enzyme.shallow;

describe("Main navigation", () => {
  // Set up state to avoid dumb enzyme errors
  const origError = console.error;
  const DISALLOWED_ERROR_TAGS = ["incorrect casing"];
  beforeEach(() => {
    console.error = e => {
      for (let tag of DISALLOWED_ERROR_TAGS) {
        if (e.toLowerCase().includes(tag.toLowerCase())) {
          continue;
        } else {
          if (!e.toLowerCase().includes("%s")) {
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

  const setPage = jest.fn;
  it("Should render main page", () => {
    const wrapper = mount(<Main setPage={setPage} />);
    expect(
      wrapper
        .find("Text")
        .first()
        .props().children
    ).toEqual("Workout Pal");
  });
});
