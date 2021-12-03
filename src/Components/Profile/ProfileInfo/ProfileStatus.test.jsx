import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the status", () => {
    const component = create(<ProfileStatus status="STATUSSSSSS" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("STATUSSSSSS");
  });
  test("after creation span with status should be displayd with correct status", () => {
    const component = create(<ProfileStatus status="STATUSSSSSS" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span.length).not.toBeNull();
  });
  test("after creation input with status should't be display", () => {
    const component = create(<ProfileStatus status="STATUSSSSSS" />);
    const root = component.root;
    expect (() => {
      let span = root.findByType("input")
    }).toThrow();
});

});
