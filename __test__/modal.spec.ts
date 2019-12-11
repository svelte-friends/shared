import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import Modal from '../modal.svelte';

describe('Modal Test Suite', () => {
  it('Render Modal component', () => {
    const { getByRole } = render(Modal);
    expect(getByRole('dialog')).toBeInTheDocument();
  });

  it('Click outside modal trigger "close" event', async () => {
    const handleClick = jest.fn();
    const { component, container } = render(Modal);
    const modalBackground = container.querySelector('.modal-background');
    expect(modalBackground).toBeInTheDocument();
    component.$on('close', handleClick);
    await fireEvent.click(modalBackground);
    expect(handleClick).toHaveBeenCalled();
  });

  afterEach(cleanup);
});
