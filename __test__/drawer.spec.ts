import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Drawer from '../drawer.svelte';

describe('Drawer Test Suite', () => {
  it('By default, drawer does not shown', () => {
    const { container } = render(Drawer);
    const drawer = container.querySelector('.drawer');
    expect(drawer).not.toBeInTheDocument();
  });

  it('If the drawer is shown, clicking outside dispatch a "close" event', async () => {
    const handleClose = jest.fn();
    const { container, component } = render(Drawer, {
      props: {
        show: true,
      },
    });
    component.$on('close', handleClose);
    const drawerBackground = container.querySelector('.drawer-background');
    expect(drawerBackground).toBeInTheDocument();
    await fireEvent.click(drawerBackground);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Should receive a "persistent" property', () => {
    const { container } = render(Drawer, {
      props: {
        show: true,
        persistent: true,
      }
    });
    const drawerSidebar = container.querySelector('.drawer-sidebar');
    expect(drawerSidebar).toBeInTheDocument();
    expect(drawerSidebar).toHaveClass('persistent');
  })

  afterEach(() => {
    cleanup();
  });
});
