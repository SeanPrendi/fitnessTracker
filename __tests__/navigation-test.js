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

  it("Should render main page", () => {
    const setPage = jest.fn;
    const wrapper = mount(<Main setPage={setPage}  day={"Back"}/>);
    expect(
      wrapper
        .find("Text")
        .first()
        .props().children
    ).toEqual("Workout Pal");
  });

  it("Should switch to app settings on button press", () => {
    const setPage = jest.fn();
    const wrapper = mount(<Main setPage={setPage}  day={"Back"}/>);
    expect(
      wrapper
        .find("Button")
        .at(0)
        .props().id
    ).toEqual("appSettings");
    wrapper
      .find("TouchableHighlight")
      .at(0)
      .simulate("click");
    expect(setPage.mock.calls[0][0]).toEqual("appSettings");
  });

  it("Should switch to calendar on button press", () => {
    const setPage = jest.fn();
    const wrapper = mount(<Main setPage={setPage}  day={"Back"}/>);
    expect(
      wrapper
        .find("Button")
        .at(1)
        .props().id
    ).toEqual("calendar");
    wrapper
      .find("TouchableHighlight")
      .at(1)
      .simulate("click");
    expect(setPage.mock.calls[0][0]).toEqual("calendar");
  });

  it("Should switch to main on button press", () => {
    const setPage = jest.fn();
    const wrapper = mount(<Main setPage={setPage}  day={"Back"}/>);
    expect(
      wrapper
        .find("Button")
        .at(2)
        .props().id
    ).toEqual("main");
    wrapper
      .find("TouchableHighlight")
      .at(2)
      .simulate("click");
    expect(setPage.mock.calls[0][0]).toEqual("main");
  });

  it("Should switch to user settings on button press", () => {
    const setPage = jest.fn();
    const wrapper = mount(<Main setPage={setPage}  day={"Back"}/>);
    expect(
      wrapper
        .find("Button")
        .at(3)
        .props().id
    ).toEqual("userSettings");
    wrapper
      .find("TouchableHighlight")
      .at(3)
      .simulate("click");
    expect(setPage.mock.calls[0][0]).toEqual("userSettings");
  });

  it("Should switch to stats on button press", () => {
    const setPage = jest.fn();
    const wrapper = mount(<Main setPage={setPage}  day={"Back"}/>);
    expect(
      wrapper
        .find("Button")
        .at(4)
        .props().id
    ).toEqual("stats");
    wrapper
      .find("TouchableHighlight")
      .at(4)
      .simulate("click");
    expect(setPage.mock.calls[0][0]).toEqual("stats");
  });
});
