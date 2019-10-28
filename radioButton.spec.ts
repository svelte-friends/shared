import "jest";
import RadioButton from "./radioButton.svelte";
import { render, cleanup } from "@testing-library/svelte";

describe("RadioButton Test Suite", () => {
  it("Render radiobutton with color", () => {
    const { container } = render(RadioButton, {
      props: {
        color: "#2e7d32"
      }
    });
    const radioButton = container.querySelector(".checkmark");
    const borderColor = getComputedStyle(radioButton).getPropertyValue("border-color");
    expect(borderColor).toBe("#2e7d32");
  });

  afterEach(() => {
    cleanup();
  });
});
