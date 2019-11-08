import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import { getByText, fireEvent } from '@testing-library/dom';
import Button from '../button.svelte';

describe('Button Test Suite', () => {
  it('The button should use 3 sizes: small, medium and large.', () => {
    const container = document.body;
    render(Button, { props: { text: 'Default' } });
    render(Button, { props: { text: 'Small', small: true } });
    render(Button, { props: { text: 'Big', big: true } });

    const btnDefault = getByText(container, 'Default');
    const btnSmall = getByText(container, 'Small');
    const btnBig = getByText(container, 'Big');

    expect(btnDefault).not.toHaveClass('small');
    expect(btnDefault).not.toHaveClass('big');

    expect(btnSmall).toHaveClass('small');
    expect(btnBig).toHaveClass('big');
  });

  it('If you do not send size you should use the default value: medium', () => {
    const { getByText } = render(Button, { props: { text: 'Click me!' } });
    const button = getByText('Click me!');
    expect(button).not.toHaveClass('big');
    expect(button).not.toHaveClass('small');
  });

  it('He may receive a click event called click and respond to mouse clicks by triggering the sent event', async () => {
    const { getByText } = render(Button, { props: { text: 'Click me!' } });
    const button = getByText('Click me!');
    let click = false;
    button.addEventListener('click', () => (click = !click));
    await fireEvent.click(button);
    expect(click).toBe(true);
    await fireEvent.click(button);
    expect(click).toBe(false);
  });

  it('The button must have three types: default, round and simple', () => {
    const container = document.body;
    render(Button, { props: { text: 'Default' } });
    render(Button, { props: { text: 'Pill', pill: true } });
    render(Button, { props: { text: 'Outline', outline: true } });

    const btnDefault = getByText(container, 'Default');
    const btnPill = getByText(container, 'Pill');
    const btnOutline = getByText(container, 'Outline');

    expect(btnDefault).not.toHaveClass('pill');
    expect(btnDefault).not.toHaveClass('outline');

    expect(btnPill).toHaveClass('pill');
    expect(btnOutline).toHaveClass('outline');
  });

  it('When no format is sent use default', () => {
    const { getByText } = render(Button, { props: { text: 'Click here!' } });
    const button = getByText('Click here!');
    expect(button).not.toHaveClass('big');
    expect(button).not.toHaveClass('small');
  });

  it('When no text is sent use default', () => {
    const { getByText } = render(Button, { props: { text: 'Click here!' } });
    const button = getByText('Click here!');
    expect(button).toBeInTheDocument();
  });

  it('The default button must be at least 100px wide', () => {
    const { getByText } = render(Button, { props: { text: 'Click me!' } });
    const button = getByText('Click me!');
    expect(button).toHaveStyle('width: 100px');
  });

  afterEach(() => {
    cleanup();
  });
});
