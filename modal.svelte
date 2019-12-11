<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  const dispatch = createEventDispatcher();

  export let background = 'rgba(0, 0, 0, 0.5)';
  const close = () => dispatch('close');
</script>

<style>
  .modal {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 10px;
  }

  .modal-background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: var(--modal-background);
    top: 0;
    left: 0;
    z-index: 0;
  }

</style>

<div
  on:click={close}
  transition:fade
  style="--modal-background: {background}"
  class="modal-background" />

<div class="modal" role="dialog" transition:fade>
  <slot />
</div>
