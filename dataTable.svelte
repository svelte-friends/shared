<script>
  export let striped = true;
  export let textAlignHeader = 'start';
  export let textAlignBody = 'start';
  export let colorTextHeader = '#fff';
  export let colorbackgroundHeader = '#624695';
  export let colorBackgroundBody = '#fff';
  export let colorTextBody = 'black';
  export let colorbackgroundStriped = '#ebebeb';
  export let col = 4;
  let columnTotal = [];
  export let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
  export let tbody = [];
  export let tbodyComponent = [];

  if (!striped) {
    colorbackgroundStriped = 'transparent';
  }

  for (let i = 0; i < col; i++) {
    columnTotal.push(i);
  }
  let prefixHeader = '';
  let prefixBody = '';
  if (textAlignBody == 'end') prefixBody = 'flex-';

  const styleColor = `
    --color-text-header: ${colorTextHeader};
    --color-background-header: ${colorbackgroundHeader};
    --color-background-body: ${colorBackgroundBody};
    --color-text-body: ${colorTextBody};
    --color-background-striped: ${colorbackgroundStriped};
    --color-background-striped: ${colorbackgroundStriped};
    --text-align-header: ${prefixHeader + textAlignHeader};
    --text-align-body: ${prefixBody + textAlignBody};
  `;
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
    background-color: var(--color-background-header);
    display: flex;
    text-align: var(--text-align-header);
  }
  .header-content {
    width: 100%;
    color: var(--color-text-header);
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
    background-color: var(--color-background-body);
  }
  .tbody-row {
    display: flex;
    text-align: var(--text-align-body);
  }
  .tbody-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    color: var(--color-text-body);
    text-align: var(--text-align-body);
    align-items: var(--text-align-body);
  }
  .tbody-content .tbody-row:nth-child(even) {
    background-color: var(--color-background-striped);
  }
</style>

<div class="content" style={styleColor}>

  <div class="header">
    {#each columnTotal as colIndex}
      <div class="header-content">{thead[colIndex] ? thead[colIndex] : ''}</div>
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
