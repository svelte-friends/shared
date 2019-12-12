<script>
  export let color = '#624695';
  export let hover = '#3f2371';
  export let active = '#26124a';

  export let small = false;
  export let big = false;
  export let pill = false;
  export let outline = false;
  export let full = false;

  let style = `
    --button-color: ${color};
    --button-hover-color: ${hover};
    --button-active-color: ${active};
  `;
</script>

<style>
  .button {
    text-align: center;
    vertical-align: middle;
    user-select: none;
    color: white;
    border: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background-color: var(--button-color);
    box-shadow: 0 0 7px 0 rgba(40, 39, 40, 0.25);
    height: 38px;
    min-width: 100px;
    border-radius: 5px;
  }
  .button:hover {
    background-color: var(--button-hover-color);
  }
  .button:active {
    background-color: var(--button-active-color);
  }
  .small {
    height: 28px;
  }
  .big {
    height: 48px;
    min-width: 140px;
  }
  .pill {
    border-radius: 24px;
  }
  .outline {
    background-color: transparent;
    border: 2px solid;
    color: var(--button-color);
  }
  .outline:hover {
    background-color: transparent;
    border-color: var(--button-hover-color);
    color: var(--button-hover-color);
  }
  .outline:active {
    background-color: transparent;
    border-color: var(--button-active-color);
    color: var(--button-active-color);
  }
  .full {
    width: 100%;
  }
</style>

<button
  class="button"
  class:small
  class:big
  class:pill
  class:outline
  class:full
  on:click
  {style}>
  <slot />
</button>
