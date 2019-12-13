<script>
  export let color = '#624695';
  export let hover = '#3f2371';
  export let active = '#26124a';

  export let disabled = false;
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
    user-select: none;
    color: white;
    border: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background-color: var(--button-color);
    box-shadow: 0 0 7px 0 rgba(40, 39, 40, 0.25);
    height: 38px;
    border-radius: 5px;
    padding: 0 15px;
  }
  .button:disabled,
  .button:disabled:hover,
  .button:disabled:active {
    background-color: #d5d5d5;
    color: #979797;
  }
  .button.outline:disabled,
  .button.outline:disabled:hover,
  .button.outline:disabled:active {
    background-color: transparent;
    color: #979797;
    border-color: #979797;
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
    padding: 0;
  }
</style>

<button
  {style}
  {disabled}
  class="button"
  class:small
  class:big
  class:pill
  class:outline
  class:full
  on:click>
  <slot />
</button>
