<script>
  export let items = [
    { label: 'TAB 1' },
    { label: 'TAB 2' },
    { label: 'TAB 3' },
    { label: 'TAB 4' },
    { label: 'TAB 5' },
    { label: 'TAB 6' },
    { label: 'TAB 7' },
    { label: 'TAB 8' }
  ];
  export let active = 1;
</script>

<style>
  .content {
    background-color: #fff;
    width: 100%;
    display: block;
    justify-content: space-between;
  }
  .tab {
    display: flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #8c8c8c;
  }
  .active {
    color: #624695;
  }
  .line {
    background-color: #624695;
    height: 2px;
    width: 100%;
  }
</style>

{#each items as item, index}
  <div class="content">
    <div class="tab" class:active={active - 1 == index}>{item.label}</div>
    {#if active - 1 == index}
      <div class="line" />
    {/if}
  </div>
{/each}
