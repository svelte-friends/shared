<script>
  export let label = '';
  export let color = '#fff';
  let arrow = `<svg width="16" height="16" viewBox="0 0 16 16">
                <path fill="#1A051D" fill-rule="nonzero" d="M3.415 6.65l3.826 4.464a1 1 0 0 0 1.518 0l3.826-4.463A1 1 0 0 0 11.825 5h-7.65a1 1 0 0 0-.76 1.65z"/>
               </svg>`;

</script>

<style>
  .collapse {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    background-color: var(--collapse-background);
    padding: 15px;
  }
  .item {
    display: flex;
    align-items: center;
  }

</style>

<div
  class="collapse"
  style="--collapse-background:{color}">
  <div class="item collapse-label">{label}</div>
    {@html arrow}
  </div>
