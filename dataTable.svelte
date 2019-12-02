<script>
  export let col = 4;
  let columnTotal = [];
  export let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
  export let tbody = [
    ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
    ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
    ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
  ];
  export let tbodyComponent = [];

  for (let i = 0; i < col; i++) {
    columnTotal.push(i);
  }
</script>

<style>
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    width: 100%;
    height: 55px;
    background-color: red;
    display: flex;
    justify-content: space-;
    justify-items: flex-start;
  }
  .header-content {
    width: 100%;
    color: white;
    font-weight: 600;
    padding: 20px;
  }
  .tbody {
    display: flex;
    flex-direction: column;
  }

  .tbody-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
  }
  .tbody-row {
    display: flex;
  }
  .tbody-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: #ccc; */
    justify-items: flex-start;
    padding: 20px;
  }
  .tbody-content .tbody-row:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>

<div class="content">

  <div class="header">
    {#each thead as item}
      <div class="header-content">{item}</div>
    {/each}
  </div>

  <div class="tbody">
    {#each columnTotal as colIndex}
      <svelte:component this={tbodyComponent[colIndex]} />
    {/each}
  </div>

  <div class="tbody-content">
    {#each tbody as array}
      <div class="tbody-row">
        {#each array as item}
          <div class="tbody-column">
            {#if typeof item === 'string'}
              {item}
            {:else}
              <svelte:component this={item} />
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>

</div>
