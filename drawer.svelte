<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  export let show = true;
  export let persistent = false;

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
</script>

<style>
  .drawer-sidebar {
    z-index: 1;
    position: absolute;
    height: 100%;
    background-color: #fff;
  }
  .drawer-background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .drawer-sidebar,
  .drawer-background {
    top: 0;
    left: 0;
  }
  .persistent {
    position: relative;
  }
</style>

{#if show}
  <div class="drawer-sidebar" class:persistent transition:fly={{ x: -500 }}>
    <slot />
  </div>
  {#if !persistent}
    <div class="drawer-background" on:click={close} />
  {/if}
{/if}
