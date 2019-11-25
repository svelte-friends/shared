<script>
  export let label = '';
  let arrow = `<svg width="16" height="16" viewBox="0 0 16 16">
                <path fill="#1A051D" fill-rule="nonzero" d="M3.415 6.65l3.826 4.464a1 1 0 0 0 1.518 0l3.826-4.463A1 1 0 0 0 11.825 5h-7.65a1 1 0 0 0-.76 1.65z"/>
               </svg>`;
</script>

<style>
  .collapse-label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0 5px;
  }
  .collapse-button {
    height: 30px;
    font-size: 14px;
    font-weight: 500;
    float: left;
    border: none;
    background-color: transparent;
  }
</style>

<div class="collapse">
  <div class="collapse-label">
    <button class="collapse-button">{label}</button>
    {@html arrow}
  </div>
</div>
