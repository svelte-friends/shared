import 'jest';
import '@testing-library/jest-dom/extend-expect';
import RadioButton from '../radioButton.svelte';
import { render, cleanup, fireEvent } from '@testing-library/svelte';

describe('RadioButton Test Suite', () => {
  it('Check RadioButton by clicking in any part of component', async () => {
    const { container } = render(RadioButton);
    const radioButton = container.querySelector('.radio');
    const input = container.querySelector('.radio input');
    await fireEvent.click(radioButton);
    expect(input).toBeChecked();
  });

  it("Render RadioButton with property 'checked' set true", () => {
    let { getByLabelText } = render(RadioButton, {
      props: {
        label: 'Blue',
        checked: true,
      },
    });
    const radioBlue = getByLabelText('Blue');
    expect(radioBlue).toBeChecked();
  });

  it('Send label property', () => {
    const { getByLabelText } = render(RadioButton, {
      props: {
        label: 'Blue',
        color: 'blue',
      },
    });
    const radioButton = getByLabelText('Blue');
    expect(radioButton).toBeInTheDocument();
  });

  it('Send value property', () => {
    const { getByDisplayValue } = render(RadioButton, {
      props: {
        label: 'Blue',
        color: 'blue',
        value: 'blue',
      },
    });
    const radioButton = getByDisplayValue('blue');
    expect(radioButton).toBeInTheDocument();
  });

  it('Must be able to receive disabled state', () => {
    const { getByLabelText } = render(RadioButton, {
      props: {
        disabled: true,
        label: 'select all',
      },
    });
    const component = getByLabelText('select all');
    expect(component).not.toBeEnabled();
  });

  afterEach(() => {
    cleanup();
  });
});
