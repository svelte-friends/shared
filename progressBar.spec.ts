import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import ProgressBar from './progressBar.svelte';

describe('ProgressBar Test Suite', () => {
  it('By default the background color will be: linear-gradient (268deg, #624695, #e1364a);', () => {
    const container = document.body;
    render(ProgressBar);
    const progressElement = container.querySelector('.progress-indicator');
    expect(progressElement).toHaveStyle(
      'background: linear-gradient (268deg, #624695, #e1364a)'
    );
  });

  it('It should be possible to receive a color for progress Bar: background Color', () => {
    const container = document.body;
    render(ProgressBar, {
      props: {
        backgroundColor: 'red',
      },
    });
    const progressElement = container.querySelector('.progress-indicator');
    expect(progressElement).toHaveStyle('background:red');
  });

  it('It should have 3 sizes: default, medium and big', () => {
    const container = document.body;
    render(ProgressBar, {
      props: {
        medium: 'true',
      },
    });
    render(ProgressBar, {
      props: {
        big: 'true',
      },
    });

    const progressMedium = container.querySelector('.medium');
    const progressBig = container.querySelector('.big');

    expect(progressMedium).toHaveClass('medium');
    expect(progressBig).toHaveClass('big');
  });

  it('Progress value will be between 0 and 100: Example greater than 100', () => {
    const container = document.body;
    render(ProgressBar, {
      props: {
        value: '101',
      },
    });
    const progressElement = container.querySelector('.progress-indicator');
    const widthProgress = getComputedStyle(progressElement).getPropertyValue(
      'width'
    );
    expect(widthProgress).toBe('100%');
  });

  it('Progress value will be between 0 and 100: example less than 0', () => {
    const container = document.body;
    render(ProgressBar, {
      props: {
        value: '-1',
      },
    });
    const progressElement = container.querySelector('.progress-indicator');
    const widthProgress = getComputedStyle(progressElement).getPropertyValue(
      'width'
    );
    expect(widthProgress).toBe('0%');
  });

  it('Must have 2 types, default and indeterminate: example with indeterminate', () => {
    const container = document.body;
    render(ProgressBar, {
      props: { indeterminate: true },
    });
    const progressIndeterminate = container.querySelector('.indeterminate');
    expect(progressIndeterminate).toHaveClass('indeterminate');
  });

  it('Must have 2 types, default and indeterminate: example with default', () => {
    const container = document.body;
    render(ProgressBar);
    const progressDefault = container.querySelector('.progress-indicator');
    expect(progressDefault).not.toHaveClass('indeterminate');
  });

  afterEach(() => {
    cleanup();
  });
});
