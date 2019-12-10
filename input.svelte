<script>
  export let placeholder;
  export let placeholderColor = '#8c8c8c';
  export let color = '#000';
  export let backgroundColor = '#fff';
  export let focusColor = '#000';
  export let type = 'text';
  export let label;
  let inputBar,
    isPassword = false,
    show = false;
  type = /radio|checkbox/.test(type) ? 'text' : type;
  isPassword = type === 'password';

  const inputStyle = `
    --input-color: ${color};
    --input-background-color: ${backgroundColor};
    --input-focus-color: ${focusColor};
    --input-placeholder-color: ${placeholderColor};
  `;

  let eye = `<svg viewBox="0 0 512 512"><path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"/></svg>`;
  let eyeOff = `<svg viewBox="0 0 512 512"><path d="M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z"/></svg>`;

  function inputFocus() {
    inputBar.style.backgroundColor = focusColor;
  }

  function inputBlur() {
    inputBar.style.backgroundColor = color;
  }

  function handleShow() {
    show = !show;
    type = show ? 'text' : 'password';
  }
</script>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
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

  .input-body :global(*):not(.input):not(.input-password-eye *) {
    width: 20px;
    max-width: 20px;
  }

  .input-password-eye {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    width: 30px;
    height: 25px;
    cursor: pointer;
  }

  .input-password-eye:hover {
    background-color: #d8d8d8;
  }

  .input-password-eye:active {
    background-color: #cacaca;
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
    {#if isPassword}
      <div class="input-password-eye" on:click={handleShow}>
        {@html show ? eyeOff : eye}
      </div>
    {:else}
      <slot name="right" />
    {/if}
  </div>
  <div class="input-bar" bind:this={inputBar} />
</div>
