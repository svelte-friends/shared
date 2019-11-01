import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import DotLabel from './dotLabel.svelte';

describe("DotLabel Test Suite", () => {

    it("It should be possible to receive a color for the text:colorText", () => {
        const { getByText } = render(DotLabel, {
            props: { colorText: "blue" }
        });
        const dotlabelElement = getByText("Texto");
        const bgColor = getComputedStyle(dotlabelElement).getPropertyValue("color");
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

    it("Must be able to receive a Badge Number", () => {
        const { getByText } = render(DotLabel, { props: { number: "1" } });
        const dotLabelComponent = getByText("1");
        expect(dotLabelComponent).toBeDefined();
    });

    it("It should be possible to receive a color for the Badge number: textBadge", () => {
        const { getByText } = render(DotLabel, {
            props: {
                textBadgeColor: "blue",
                number: "10"
            }
        });
        const dotlabelElement = getByText("10");
        const bgColor = getComputedStyle(dotlabelElement).getPropertyValue("color");
        expect(bgColor).toBe("blue");
    });

    it("It should be possible to choose size type, default and small: example: default", () => {
        const container = document.body;
        render(DotLabel, { props: { size: "small" } });
        render(DotLabel);

        const dotLabelSmall = container.querySelector(".badgeSmall");
        const dotLabelDefault = container.querySelector(".badgeDefault");

        expect(dotLabelSmall.classList.contains("badgeSmall")).toBe(true);
        expect(dotLabelDefault.classList.contains("badgeDefault")).toBe(true);
    });

    it("In the case the number be larger than 99, the text should be replaced with 99+", () => {
        const { getByText } = render(DotLabel, { props: { number: "101" } });
        const textSpan = getByText("99+");
        expect(textSpan).toBeDefined();
    });
    
    afterEach(() => {
        cleanup();
    });
});



