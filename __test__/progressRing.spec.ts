import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import { getByText } from '@testing-library/dom';
import ProgressRing from '../progressRing.svelte';

describe('ProgressRing Test Suite', () => {
  it('The progress should use 3 sizes: small, medium and large.', () => {
    const container = document.body;
    render(ProgressRing);
    render(ProgressRing, { props: { small: true } });
    render(ProgressRing, { props: { big: true } });

    const progressDefault = container.querySelector('.progress');
    const progressSmall = container.querySelector('.small');
    const progressBig = container.querySelector('.big');

    expect(progressDefault).not.toHaveClass('small');
    expect(progressDefault).not.toHaveClass('big');
    expect(progressSmall).toHaveClass('small');
    expect(progressBig).toHaveClass('big');
  });

  it('Text definition (Text default loading)', () => {
    const container = document.body;
    render(ProgressRing);
    render(ProgressRing, { props: { text: 'loading one' } });
    const progressTextDefault = getByText(container, 'Loading');
    const progressTextCustom = getByText(container, 'loading one');

    expect(progressTextDefault).toBeDefined();
    expect(progressTextCustom).toBeDefined();
  });

  it('type definition (indeterminate)', () => {
    const container = document.body;
    render(ProgressRing, { props: { type: 'indeterminate' } });
    const progressIndeterminate = container.querySelector('.indeterminate');
    expect(progressIndeterminate).toHaveClass('indeterminate');
  });

  it('type definition (determinate)', () => {
    const container = document.body;
    render(ProgressRing, { props: { type: 'determinate', percent: 30 } });
    const progressIndeterminate = container.querySelector('.determinate');
    expect(progressIndeterminate).toHaveClass('determinate');
  });

  afterEach(() => {
    cleanup();
  });
});
