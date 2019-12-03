<script>
  import { createEventDispatcher } from 'svelte';
  export let show = false;

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
</script>

<style>
  .drawer-sidebar {
    left: 0;
    z-index: 1;
    position: absolute;
    height: 100%;
    background-color: #fff;
  }

  .drawer-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
</style>

{#if show}
  <div class="drawer">
    <div class="drawer-sidebar">
      <slot />
    </div>
    <div class="drawer-background" on:click={close} />
  </div>
{/if}
