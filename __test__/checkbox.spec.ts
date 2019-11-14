import 'jest';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from '../checkbox.svelte';
import { render, cleanup, fireEvent } from '@testing-library/svelte';

describe('Checkbox Test Suite', () => {
  it('Render basic checkbox', () => {
    const { getByLabelText } = render(Checkbox);
    const input = getByLabelText('');
    expect(input).toBeInTheDocument();
  });

  it('Render checkbox with label property', () => {
    const { getByLabelText } = render(Checkbox, {
      props: {
        label: 'Select All',
      },
    });
    const input = getByLabelText('Select All');
    expect(input).toBeInTheDocument();
  });

  it("Render checkbox with 'checked' property with value 'true'", () => {
    const { getByLabelText } = render(Checkbox, {
      props: {
        label: 'Select All',
        checked: true,
      },
    });
    const input = getByLabelText('Select All');
    expect(input).toBeChecked();
  });

  it("Click input and change 'checked' property", async () => {
    const { getByDisplayValue } = render(Checkbox, {
      props: {
        label: 'Select All',
      },
    });
    const input = getByDisplayValue('Select All');
    expect(input).toBeInTheDocument();
    await fireEvent.click(input);
    expect(input).toBeChecked();
    await fireEvent.click(input);
    expect(input).not.toBeChecked();
  });

  it('Must be able to receive disabled state', () => {
    const { getByLabelText } = render(Checkbox, {
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
