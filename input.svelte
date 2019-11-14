<script>
  export let placeholder;
  export let placeholderColor = '#8c8c8c';
  export let color = '#000';
  export let backgroundColor = '#fff';
  export let focusColor = '#000';
  export let type = 'text';
  export let label;
  let inputBar;
  type = /radio|checkbox/.test(type) ? 'text' : type;

  const inputStyle = `
    --input-color: ${color};
    --input-background-color: ${backgroundColor};
    --input-focus-color: ${focusColor};
    --input-placeholder-color: ${placeholderColor};
  `;

  function inputFocus() {
    inputBar.style.backgroundColor = focusColor;
  }

  function inputBlur() {
    inputBar.style.backgroundColor = color;
  }
</script>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
  }

  .input-label {
    font-size: 12px;
    font-weight: 500;
  }

  .input-body {
    display: flex;
    align-items: center;
  }

  .input {
    width: 100%;
    background-color: var(--input-background-color);
    border: none;
  }

  .input::placeholder {
    color: var(--input-placeholder-color);
  }
  .input-bar {
    width: 100%;
    height: 2px;
    background-color: var(--input-color);
    border-radius: 1px;
  }

  .input-body :global(*):not(.input) {
    width: 20px;
    max-width: 20px;
  }
</style>

<div class="input-container" style={inputStyle}>
  {#if label}
    <div class="input-label">{label}</div>
  {/if}
  <div class="input-body">
    <slot name="left" />
    <input
      class="input"
      on:focus={inputFocus}
      on:blur={inputBlur}
      {placeholder}
      {type} />
    <slot name="right" />
  </div>
  <div class="input-bar" bind:this={inputBar} />
</div>
