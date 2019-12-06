import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Pagination from '../pagination.svelte';

describe('Pagination Test Suite', () => {
  it('Pagination may be colorized', () => {
    const container = document.body;
    render(Pagination, { props: { color: 'red' } });
    const active = container.querySelector('.active > div');
    expect(active).toHaveStyle('background-color: red');
  });

  it('If you do not receive color use the default', () => {
    const container = document.body;
    render(Pagination);
    const active = container.querySelector('.active > div');
    expect(active).toHaveStyle('background-color: #624695');
  });

  it('Select receive which page will start', () => {
    const { getByText } = render(Pagination, { props: { active: 2 } });
    const label = getByText('2');
    expect(label).toBeInTheDocument();
  });

  it('If you are on the first page, do not show the previous arrow', () => {
    const container = document.body;
    render(Pagination, { props: { active: 1 } });
    const item = container.querySelector('ul').firstElementChild;
    expect(item).toHaveClass('hidden');
  });

  it("If it's on the last page, don't show an arrow next", () => {
    const container = document.body;
    render(Pagination, { props: { total: 100, active: 100, displayRows: 1 } });
    const item = container.querySelector('ul').lastElementChild;
    expect(item).toHaveClass('hidden');
  });

  it('When a pagination has more than 10 pages, it shows as first 9 and shows one last page', () => {
    const container = document.body;
    render(Pagination, { props: { total: 20, displayRows: 1 } });
    const length = container.querySelectorAll('.pagination-item').length;
    expect(length).toBe(10);
  });

  it('Can receive the total number of records.', () => {
    const total = 100;
    const displayRows = 2;
    const pages = Math.ceil(total / displayRows);
    const { getByText } = render(Pagination, { props: { total, displayRows } });
    const text = getByText('...' + pages.toString());
    expect(text).toBeDefined();
  });

  it('If you click on a number, skip to the corresponding records', async () => {
    const { getByText } = render(Pagination, {
      props: { total: 20, displayRows: 1 },
    });
    const label = getByText('2');
    await fireEvent.click(label);
    expect(label.parentElement).toHaveClass('active');
  });

  it('it should be possible to send the current of the selected page', async done => {
    const container = document.body;
    render(Pagination, { props: { total: 20, displayRows: 5 } });
    const root = container.querySelector('.pagination') as HTMLUListElement;
    const pagination = container.querySelector(
      "li div[data-index='2']"
    ) as HTMLUListElement;
    expect(root).toBeDefined();
    expect(pagination).toBeDefined();

    let got = null;
    let want = { current: 2 };

    const onClick = function(event: any) {
      got = event.detail;
    };
    root.addEventListener('change', onClick);
    await fireEvent.click(pagination);
    expect(got).toEqual(want);
    done();
  });

  afterEach(() => {
    cleanup();
  });
});
