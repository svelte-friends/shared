<script>
  export let items = [
    { label: 'TAB 1' },
    { label: 'TAB 2' },
    { label: 'TAB 3' },
    { label: 'TAB 4' },
    { label: 'TAB 5' },
    { label: 'TAB 6' },
    { label: 'TAB 7' },
    { label: 'TAB 8' },
  ];
  export let active = 2;
  export let textColor = '#8c8c8c';
  export let textColorActive = '#624695';
  export let colorBackground = '#fff';
  export let colorBackgroundActive = '#fff';
  export let colorLine = '#624695';
  export let colorBackgroundHover = '#e3dcef';
  export let textColorHover = '#8c8c8c';

  const styleColor = `
    --color-background: ${colorBackground};
    --color-background-active: ${colorBackgroundActive};
    --color-text-active: ${textColorActive};
    --color-background-hover: ${colorBackgroundHover};
    --color-text-hover: ${textColorHover};
    --color-text:${textColor};
    --color-line:${colorLine};
  `;
</script>

<style>
  .content {
    background-color: var(--color-background);
    width: 100%;
    display: flex;
  }
  .item {
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .label {
    height: 48px;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
  }
  .item:hover {
    background-color: var(--color-background-hover);
  }
  .item.active > .label {
    color: var(--color-text-hover);
  }
  .active {
    background-color: var(--color-background-active);
  }
  .line {
    background-color: var(--color-line);
    height: 2px;
    width: 100%;
  }
</style>

<div class="content" style={styleColor}>
  {#each items as item, index}
    <div on:click class="item" class:active={active - 1 == index}>
      <div class="label" data-key={index + 1}>{item.label}</div>
      {#if active - 1 == index}
        <div class="line" />
      {/if}
    </div>
  {/each}
</div>
