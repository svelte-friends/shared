<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let color = '#624695';
  export let total = 20;
  export let displayRows = 2;
  export let active = 1;
  let previous = '<';
  let next = '>';
  let el;
  let pager;

  const classInline = index => {
    return parseInt(active) === index ? 'active' : '';
  };

  const styleInline = index => {
    return parseInt(active) === index ? 'color:white' : '';
  };

  const getPager = (totalItems, currentPage, pageSize) => {
    let startPage, endPage;
    const totalPages = Math.ceil(totalItems / pageSize);

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    );
    pager = {
      currentPage: currentPage,
      totalPages: totalPages,
      endPage: endPage,
      pages: pages,
    };
  };

  getPager(total, active, displayRows);

  const isFirstAndLast = (currentPage, index) => {
    return {
      first: pager.totalPages > 10 && pager.endPage > 10 && index === 0,
      last:
        pager.totalPages > 10 && pager.totalPages > currentPage && index === 9,
    };
  };

  const setPage = (currentPage, index) => {
    const values = isFirstAndLast(currentPage, index);

    if (values.last) {
      active = pager.totalPages;
    } else if (values.first) {
      active = 1;
    } else {
      active = currentPage;
    }

    const event = new CustomEvent('change', {
      detail: { current: active },
      bubbles: true,
      cancelable: true,
      composed: true, // makes the event jump shadow DOM boundary
    });
    el.dispatchEvent(event);
    dispatch('change', { current: active });
    getPager(total, active, displayRows);
  };

  const showPage = (item, index) => {
    const values = isFirstAndLast(item, index);
    let numPage;
    if (values.first) {
      numPage = '1...';
    } else if (values.last) {
      numPage = '...' + pager.totalPages;
    } else {
      numPage = item;
    }
    return numPage;
  };
</script>

<style>
  ul {
    padding-left: 0px;
    height: 30px;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: auto;
    display: flex;
    justify-content: center;
  }

  .item {
    cursor: pointer;
    width: 30px;
    height: 30px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    text-decoration: none;
  }

  .animation {
    border-radius: 10px;
    transform: scale(0);
    transition: transform 0.3s;
    width: 30px;
    height: 30px;
    position: absolute;
  }

  .active {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(40, 39, 40, 0.3);
    padding-top: 6px;
    transform: scale(1);
  }

  span {
    text-decoration: none;
    text-align: center;
    color: #8c8c8c;
    z-index: 2;
  }

  .link {
    background-color: #efefef;
    color: #8c8c8c;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .hidden {
    visibility: hidden;
    cursor: none;
  }

  .link:first-child {
    margin-right: 10px;
  }

  .link:last-child {
    margin-left: 10px;
  }

  .item:nth-child(2) {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .item:nth-last-child(2) {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
</style>

<ul class="container" bind:this={el}>
  <li
    class:hidden={active === 1}
    on:click={() => setPage(active - 1)}
    class="link">
    <span>{previous}</span>
  </li>

  {#each pager.pages as n, index}
    <li on:click={() => setPage(n, index)} class="item">
      <span
        data-index={n}
        style="background-color:{color}"
        class="animation {classInline(n)}" />
      <span style={styleInline(n)}>{showPage(n, index)}</span>
    </li>
  {/each}

  <li
    class:hidden={pager.totalPages === active}
    on:click={() => setPage(active + 1)}
    class="link">
    <span>{next}</span>
  </li>

</ul>
