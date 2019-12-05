<script>
  export let striped = true;
  export let border = false;
  export let colorBorder = "#ddd";
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
    --color-border: ${colorBorder};
    --color-background-striped: ${colorbackgroundStriped};
    --text-align-header: ${prefixHeader + textAlignHeader};
    --text-align-body: ${prefixBody + textAlignBody};
  `;
</script>

<style>
  .table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 25px;
    background-color: var(--color-background-body);
  }

  .table td,
  .table th {
    padding: 10px;
    color: var(--color-text-body);
  }

  .table.border,
  .table.border td,
  .table.border th {
    border: 1px solid var(--color-border);
  }

  .table tr:nth-child(even) {
    background-color: var(--color-background-striped);
  }

  .table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--color-background-header);
    color: var(--color-text-header);
  }
</style>

<table class="table {border ? 'border' : ''}" style={styleColor}>
  <thead class="header">
    <tr>
      {#each columnTotal as colIndex}
        {#if thead[colIndex]}
          <th
            style={thead[colIndex].width ? `width:${thead[colIndex].width}` : ''}>
            {thead[colIndex] ? thead[colIndex].label : ''}
          </th>
        {:else}
          <th />
        {/if}
      {/each}
    </tr>
  </thead>

  <tbody>
    {#each tbody as array}
      <tr>
        {#each array as item}
          {#if typeof item === 'string'}
            <td>{item}</td>
          {:else}
            <td>
              <svelte:component this={item} />
            </td>
          {/if}
        {/each}
      </tr>
    {/each}

    {#each columnTotal as colIndex}
      {#if tbodyComponent[colIndex]}
        <svelte:component this={tbodyComponent[colIndex]} />
      {/if}
    {/each}
  </tbody>
</table>
