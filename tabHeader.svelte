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
  export let active = 1;
  export let textColor = '#8c8c8c';
  export let textColorActive = '#624695';
  export let colorBackground = '#fff';
  export let colorBackgroundActive = '#fff';
  export let colorLine = '#624695';
  export let colorBackgroundHover = '#e3dcef';
  export let textColorHover = '#8c8c8c';
  export let colorScrollbar = '#624695';
  export let colorScrollbarTrack = '#ebebeb';

  const styleColor = `
    --color-background: ${colorBackground};
    --color-background-active: ${colorBackgroundActive};
    --color-text-active: ${textColorActive};
    --color-background-hover: ${colorBackgroundHover};
    --color-text-hover: ${textColorHover};
    --color-text:${textColor};
    --color-line:${colorLine};
    --color-scrollbar-track:${colorScrollbarTrack};
    --color-scrollbar:${colorScrollbar};
  `;
</script>

<style>
  .content {
    width: 100%;
    display: flex;
    overflow: hidden;
  }
  .content:hover {
    overflow-x: auto;
    overflow-y: hidden;
  }
  #item > * {
    pointer-events: none;
  }
  .item {
    background-color: var(--color-background);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    align-items: center;
  }
  .label {
    white-space: nowrap;
    height: 48px;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    padding-left: 30px;
    padding-right: 30px;
  }
  .item:hover {
    color: var(--color-text-hover);
    background-color: var(--color-background-hover);
  }
  .item:hover > .content-item > .label {
    color: var(--color-text-hover);
  }
  .item.active > .content-item > .label {
    color: var(--color-text-active);
  }
  .item.active:hover > .content-item > .label {
    fill: var(--color-text-hover);
    color: var(--color-text-hover);
  }
  .item.active:hover > .content-item > .icon {
    fill: var(--color-text-hover);
  }
  .icon {
    width: 40px;
    margin-top: 6px;
    margin-bottom: -6px;
    fill: var(--color-text);
  }
  .item:hover > .content-item > .icon {
    fill: var(--color-text-hover);
  }
  .item.active > .content-item > .icon {
    fill: var(--color-text-active);
  }
  .active {
    background-color: var(--color-background-active);
  }
  .line {
    background-color: var(--color-line);
    height: 2px;
    width: 100%;
  }
  ::-webkit-scrollbar {
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--color-scrollbar-track);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-scrollbar);
    border-radius: 10px;
  }
  .content-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="content" style={styleColor} on:click>
  {#each items as item, index}
    <div
      class="item"
      id="parent"
      on:click={() => (active = index + 1)}
      class:active={active - 1 == index}>
      <div class="content-item">
        <div class="icon">
          <slot name="icon" {item} />
        </div>
        <div class="label" data-key={index + 1}>{item.label}</div>
      </div>
      {#if active - 1 == index}
        <div class="line" />
      {/if}
    </div>
  {/each}
</div>
