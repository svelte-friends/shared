<script>
  export let text = "";
  export let header = "";
</script>

<style>
  .list-item-header {
    font-size: 14px;
    letter-spacing: 0.75px;
    font-weight: 500;
  }

  .list-item-text {
    font-size: 14px;
    letter-spacing: 0.25px;
    font-weight: 400;
  }
</style>

<div class="list-item">
  <div class="list-item-header">{header}</div>
  <div class="list-item-text">{text}</div>
</div>
