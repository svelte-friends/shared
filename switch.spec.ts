import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Switch from './switch.svelte';

describe("Switch Test Suite", () => {

    it("Clicking the switch state changes to active or inactive", async () => {
        const { getByLabelText } = render(Switch)
        const component = getByLabelText("");
        await fireEvent.click(component);
        expect(component).toBeChecked();
        await fireEvent.click(component);
        expect(component).not.toBeChecked();
    });
    afterEach(() => {
        cleanup();
    });
});



