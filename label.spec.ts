import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import Label from './label.svelte';

describe('Label Test Suite', () => {
  it('It must be possible to pass the label text in a name property: text', () => {
    const { getByText } = render(Label, { props: { text: 'MyLabel' } });
    const labelComponent = getByText('MyLabel');
    expect(labelComponent).toBeDefined();
  });

  it('By default the text is: Label', () => {
    const { getByText } = render(Label);
    const labelComponent = getByText('Label');
    expect(labelComponent).toBeDefined();
  });

  it('It should be possible to pass Label color in a property called color', () => {
    const container = document.body;
    render(Label, { props: { color: 'red' } });
    const labelElement = container.querySelector('.label');
    const bgColor = getComputedStyle(labelElement).getPropertyValue(
      'background-color'
    );
    expect(bgColor).toBe('red');
  });

  it('By default the label color is: purple', () => {
    const container = document.body;
    const {} = render(Label);
    const labelElement = container.querySelector('.label');
    const bgColor = getComputedStyle(labelElement).getPropertyValue(
      'background-color'
    );
    expect(bgColor).toBe('rgb(98, 70, 149)');
  });

  it('It should be possible to choose the label type between fill and outline. ex: outline', () => {
    const container = document.body;
    render(Label, { props: { type: 'outline' } });
    const labelOutline = container.querySelector('.label');
    const bgOutline = getComputedStyle(labelOutline).getPropertyValue(
      'background-color'
    );
    expect(bgOutline).toBe('transparent');
  });

  it('It should be possible to choose the label type between fill and outline. ex: fill', () => {
    const container = document.body;
    render(Label, { props: { type: 'fill' } });
    const labelOutline = container.querySelector('.label');
    const bgOutline = getComputedStyle(labelOutline).getPropertyValue(
      'background-color'
    );
    expect(bgOutline).toBe('rgb(98, 70, 149)');
  });

  it('By default, type: fill', () => {
    const container = document.body;
    render(Label);
    const labelOutline = container.querySelector('.label');
    const bgOutline = getComputedStyle(labelOutline).getPropertyValue(
      'background-color'
    );
    expect(bgOutline).toBe('rgb(98, 70, 149)');
  });

  afterEach(() => {
    cleanup();
  });
});
