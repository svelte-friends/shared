import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Switch from './switch.svelte';

describe('Switch Test Suite', () => {
  it('Clicking the switch state changes to active or inactive', async () => {
    const { getByLabelText } = render(Switch);
    const component = getByLabelText('');
    await fireEvent.click(component);
    expect(component).toBeChecked();
    await fireEvent.click(component);
    expect(component).not.toBeChecked();
  });

  it('Must be able to receive disabled state', () => {
    const { getByLabelText } = render(Switch, {
      props: {
        disabled: true,
      },
    });
    const component = getByLabelText('');
    expect(component).not.toBeEnabled();
  });

  it('If the component is disabled, clicking should not change state', () => {
    const { getByLabelText } = render(Switch, {
      props: {
        disabled: true,
      },
    });
    const component = getByLabelText('');
    component.click();
    expect(component).not.toBeChecked();
  });

  it("Render component with status 'disabled' and 'on'", () => {
    const { getByLabelText } = render(Switch, {
      props: {
        disabled: true,
        on: true,
      },
    });
    const component = getByLabelText('');
    expect(component).toBeChecked();
    expect(component).toBeDisabled();
    component.click();
    expect(component).toBeDisabled();
    expect(component).toBeChecked();
  });

  afterEach(() => {
    cleanup();
  });
});
