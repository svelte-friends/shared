<script>
  export let label = '';
  export let element = '';
  export let color = '#fff';
  let show = false;
  let open = false;
  let close = false;
  let arrow = `<svg width="16" height="16" viewBox="0 0 16 16">
                <path fill="#1A051D" fill-rule="nonzero" d="M3.415 6.65l3.826 4.464a1 1 0 0 0 1.518 0l3.826-4.463A1 1 0 0 0 11.825 5h-7.65a1 1 0 0 0-.76 1.65z"/>
               </svg>`;
  function handleClick() {
    show = !show;
    open = !open;
    close = !open;
  }
</script>

<style>
  .collapse {
    width: 100%;
    position: relative;
  }

  .collapse-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--collapse-background);
    height: 50px;
    padding: 15px;
  }

  .collapse-button {
    display: flex;
  }

  .open {
    animation: rotationOpen 0.5s forwards;
  }

  .close {
    animation: rotationClose 0.5s forwards;
  }

  .collapse-content {
    display: none;
    width: 100%;
    position: absolute;
  }

  .show {
    display: block;
  }

  @keyframes rotationOpen {
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
  <div class="collapse-label">
    <span>{label}</span>
    <div class="collapse-button" class:open class:close>
      {@html arrow}
    </div>
  </div>
  <div class="collapse-content" class:show>
    <slot />
  </div>
</div>
