import "jest";
import Checkbox from "./checkbox.svelte";
import { render, cleanup } from "@testing-library/svelte";

describe("Checkbox Test Suite", () => {
  it("Render checkbox with no label property", () => {
    const { getByDisplayValue } = render(Checkbox);
    const checkbox = getByDisplayValue("");
    expect(checkbox).toBeDefined();
  });

  it("Render checkbox with label property", () => {
    const { getByDisplayValue } = render(Checkbox, {
      props: {
        label: "Select All"
      }
    });
    const checkbox = getByDisplayValue("Select All");
    expect(checkbox).toBeDefined();
  });

  it("Set color and send 'checked' true", () => {
    const { container } = render(Checkbox, {
      props: {
        label: "Select All",
        //rgb(252, 186, 3)
        color: "#fcba03",
        checked: true,
      }
    });
    const span = container.querySelector(".checkmark");
    const bg = getComputedStyle(span).getPropertyValue("background-color");
    expect(bg).toBe("rgb(252, 186, 3)");
  });

  it("Verify if 'checked' receive true", () => {
    const { getByDisplayValue } = render(Checkbox, {
      props: {
        label: "Select All",
        checked: true,
      }
    });
    const checkbox = getByDisplayValue("Select All");
    expect(checkbox.checked).toBe(true);
  });

  it("Click input and change checked property", () => {
    const { getByDisplayValue } = render(Checkbox, {
      props: {
        label: "Select All"
      }
    });
    const checkbox = getByDisplayValue("Select All");
    expect(checkbox).toBeDefined();
    checkbox.click();
    expect(checkbox.checked).toBe(true);
    checkbox.click();
    expect(checkbox.checked).toBe(false);
  });

  afterEach(() => {
    cleanup();
  });
});
