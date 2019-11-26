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
</script>

<style>
  .content {
    background-color: #fff;
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
    color: #8c8c8c;
  }
  .label {
    letter-spacing: 0.5px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    color: #624695;
  }
  .line {
    background-color: #624695;
    height: 2px;
    width: 100%;
  }
  .item:hover {
    background-color: #e3dcef;
  }
</style>

<div class="content">
  {#each items as item, index}
    <div on:click class="item" class:active={active - 1 == index}>
      <div class="label" data-key={index + 1}>{item.label}</div>
      {#if active - 1 == index}
        <div class="line" />
      {/if}
    </div>
  {/each}
</div>
