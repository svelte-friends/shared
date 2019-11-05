<script>
  export let text;
  export let header;
  export let color = "";
</script>

<style>
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    min-height: 50px;
    width: 100%;
  }

  .list-item-header {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.75px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .list-item-center {
    width: 100%;
    margin: 0 10px;
  }

  .list-item-text {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.25px;
    font-weight: 400;
  }
</style>

<div class="list-item" style="background-color: {color}">
  <slot name="left" />
  <div class="list-item-center">
    {#if header}
      <div class="list-item-header">{header}</div>
    {/if}
    {#if text}
      <div class="list-item-text">{text}</div>
    {/if}
  </div>
  <slot name="right" />
</div>
