<script>
  export let placeholder;
  export let placeholderColor = '#8c8c8c';
  export let color = '#000';
  export let backgroundColor = '#fff';
  export let focusColor = '#000';
  export let type = 'text';
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

  .input-body {
    display: flex;
  }

  .input {
    width: 100%;
    background-color: var(--input-background-color);
    border: none;
  }

  .input::placeholder {
    color: var(--input-placeholder-color);
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 3px;
  }
  .input-bar {
    width: 100%;
    height: 2px;
    background-color: var(--input-color);
    border-radius: 1px;
  }
</style>

<div class="input-container" style={inputStyle}>
  <div class="input-body">
    <input
      class="input"
      on:focus={inputFocus}
      on:blur={inputBlur}
      {placeholder}
      {type} />
    <div class="right">
      <slot name="right" />
    </div>
  </div>
  <div class="input-bar" bind:this={inputBar} />
</div>
