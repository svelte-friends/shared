import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import Stepper from '../stepper.svelte';

describe('receive items stepper component', () => {
    it('Checking if you received the 4 elements', () => {
        let steps = [
            { label: 'STEP 1' },
            { label: 'STEP 2' },
            { label: 'STEP 3' },
            { label: 'STEP 4' },
        ];
        const { container } = render(Stepper, {
            props: {
                steps
            },
        });
        const stepperElement = container.querySelector('.stepper');
        expect(stepperElement.childNodes).toHaveLength(4);
    });

    it('checking if it was checked', () => {
        let steps = [
            { label: 'STEP 1', done: true },
            { label: 'STEP 2', done: true },
            { label: 'Step 3', done: false },
        ]
        const { container } = render(Stepper, {
            props: {
                steps
            },
        });
        const stepperElement = container.querySelectorAll('.step-circle')
        expect(stepperElement[0]).toHaveClass('done');
        expect(stepperElement[1]).toHaveClass('done');
        expect(stepperElement[2]).not.toHaveClass('done');
    });
    afterEach(() => {
        cleanup();
    });
});
