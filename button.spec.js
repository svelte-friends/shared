import Button from "./button.svelte";
import { render } from '@testing-library/svelte';

describe("Button Test Suite", () => {

    it("Button Component should render items passed as props", async (done) => {

        const { getByText } = render(Button);

        // Load the crops
        const button = getByText('My Button tag 0.0.3');
        console.log(button);
        expect(button).toBeDefined();
        done();
    });



    // TODO: find a way to test Slots

});