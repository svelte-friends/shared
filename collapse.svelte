<script>
  export let label = '';
  export let color = '#fff';
  let show = false;
  let open = false;
  let close = false;
  let arrow = `<svg width="16" height="16" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>`;
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
