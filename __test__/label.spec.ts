import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import Label from '../label.svelte';

describe('Label Test Suite', () => {
  it('It must be possible to pass the label text in a property: text', () => {
    const { getByText } = render(Label, { props: { text: 'MyLabel' } });
    const labelComponent = getByText('MyLabel');
    expect(labelComponent).toBeDefined();
  });

  it('it should be possible to receive the outline property', () => {
    const { getByText } = render(Label, {
      props: {
        outline: true,
        text: 'Sample'
      }
    });
    const labelOutline = getByText('Sample');
    expect(labelOutline.parentElement).toHaveClass('outline');
  });

  it('by default will not be outline', () => {
    const container = document.body;
    render(Label);
    const dotLabelDefault = container.querySelector('.label');
    expect(dotLabelDefault).not.toHaveClass('outline');
  });

  afterEach(() => {
    cleanup();
  });
});
