<script>
  export let col = 4;
  export let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
  export let tbody = [];
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
    background-color: red;
    display: flex;
    justify-content: space-;
    justify-items: flex-start;
  }
  .header-content {
    width: 100%;
    color: white;
    font-weight: 600;
    padding: 20px;
  }
  .tbody {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="content">

  <div class="header">
    {#each thead as item}
      <div class="header-content">{item}</div>
    {/each}
  </div>

  <div class="tbody">
    <div>Conteudo</div>
  </div>

</div>
