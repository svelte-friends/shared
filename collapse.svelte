<script>
  export let label = '';
  export let color = '#fff';
  let show = false;
  let animation = false;
  let arrow = `<svg width="16" height="16" viewBox="0 0 16 16">
                <path fill="#1A051D" fill-rule="nonzero" d="M3.415 6.65l3.826 4.464a1 1 0 0 0 1.518 0l3.826-4.463A1 1 0 0 0 11.825 5h-7.65a1 1 0 0 0-.76 1.65z"/>
               </svg>`;
  function handleClick() {
    show = !show;
    animation = !show;
  }
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
  .collapse-button.animation {
    animation: rotationClose 0.5s;
  }
  .show {
    transform: rotate(180deg);
    animation: rotationShow 0.5s;
  }
  @keyframes rotationShow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  @keyframes rotationClose {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
</style>

<div
  on:click={handleClick}
  class="collapse"
  style="--collapse-background:{color}">
  <div class="item collapse-label">{label}</div>
  <div class="item collapse-button" class:show class:animation>
    {@html arrow}
  </div>
</div>
