import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import DotLabel from './dotLabel.svelte';

describe("DotLabel Test Suite", () => {

    it("It should be possible to receive a color for the text", () => {
        const { getByText } = render(DotLabel, {
            props: { color: "blue"}
        });
        const dotlabelElement = getByText("Texto");
        const bgColor = getComputedStyle(dotlabelElement,).getPropertyValue("color");
        expect(bgColor).toBe("blue");
    });

    afterEach(() => {
        cleanup();
    });
});



