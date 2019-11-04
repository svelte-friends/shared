<script>
  export let text;
  export let header;
</script>

<style>
  .list-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    min-height: 50px;
    width: 100%;
  }

  .list-item-header {
    font-size: 14px;
    letter-spacing: 0.75px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .list-item-text {
    font-size: 14px;
    letter-spacing: 0.25px;
    font-weight: 400;
    margin-top: 2px;
  }
</style>

<div class="list-item">
  {#if header} <div class="list-item-header">{header}</div>{/if}
  {#if text} <div class="list-item-text">{text}</div>{/if}
</div>
