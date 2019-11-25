<script>
  let items = [
    { label: 'TAB 1', active: false },
    { label: 'TAB 2', active: false },
    { label: 'TAB 3', active: true },
    { label: 'TAB 4', active: false },
  ];
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

{#each items as item}
  <div class="content">
    <div class="tab" class:active={item.active}>{item.label}</div>
    {#if item.active}
      <div class="line" />
    {/if}
  </div>
{/each}
