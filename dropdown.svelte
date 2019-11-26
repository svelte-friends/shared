<script>
  export let label = '';
  export let list = [];
  export let color = '#fff';
  let show = false;
  let arrow = `<svg width="14" height="14" viewBox="0 0 16 16">
    <path fill="#1A051D" fill-rule="nonzero" d="M3.415 6.65l3.826 4.464a1 1 0 0 0 1.518 0l3.826-4.463A1 1 0 0 0 11.825 5h-7.65a1 1 0 0 0-.76 1.65z"/>
  </svg>`;

  function handleClick() {
    show = !show;
  }
</script>

<style>
  .dropdown {
    position: relative;
  }
  .dropdown-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: var(--dropdown-background);
    padding: 0 5px;
    position: relative;
  }
  .dropdown-button {
    height: 25px;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: transparent;
  }
  .dropdown-content {
    display: none;
    align-items: center;
    width: 100%;
    background-color: #fff;
  }

  .dropdown-item {
    width: 100%;
    padding: 5px;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  .dropdown-item:hover {
    background-color: #eceff1;
  }

  .show.dropdown {
    box-shadow: 0px 0px 2px #000;
  }

  .show > .dropdown-label {
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.25);
  }
  .show > .dropdown-content {
    display: flex;
    flex-direction: column;
  }
</style>

<div
  class:show
  class="dropdown"
  on:click={handleClick}
  style="--dropdown-background: {color}">
  <div class="dropdown-label">
    <button class="dropdown-button">{label}</button>
    {@html arrow}
  </div>
  <div class="dropdown-content">
    {#each list as item, index}
      <span on:click class="dropdown-item" data-key={index} data-value={item}>{item}</span>
    {/each}
  </div>
</div>
