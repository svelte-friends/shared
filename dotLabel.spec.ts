import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import DotLabel from './dotLabel.svelte';

describe("DotLabel Test Suite", () => {

    it("It should be possible to receive a color for the text:colorText", () => {
        const { getByText } = render(DotLabel, {
            props: { colorText: "blue"}
        });
        const dotlabelElement = getByText("Texto");
        const bgColor = getComputedStyle(dotlabelElement,).getPropertyValue("color");
        expect(bgColor).toBe("blue");
    });

    it("It must be possible to receive a color for the Badge: colorBadge", () => {
        const container = document.body;
        render(DotLabel, { props: { colorBadge: "blue" } });
        const dotlabelElement = container.querySelector(".dotLabel");
        const bgColor = getComputedStyle(dotlabelElement).getPropertyValue("background-color");
        expect(bgColor).toBe("blue");
    });


    it("By default, the color of the badge will be: purple", () => {
        const container = document.body;
        const { } = render(DotLabel);
        const dotLabelElement = container.querySelector(".dotLabel");
        const bgColor = getComputedStyle(dotLabelElement).getPropertyValue("background-color");
        expect(bgColor).toBe("rgb(98, 70, 149)");
    });


    afterEach(() => {
        cleanup();
    });
});



