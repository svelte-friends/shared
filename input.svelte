<script>
  export let placeholder;
  export let placeholderColor = '#8c8c8c';
  export let color = '#000';
  export let backgroundColor = '#fff';
  export let focusColor = '#000';
  export let type = 'text';

  type = /radio|checkbox|color/.test(type) ? 'text' : type;
</script>

<style>
  .input {
    width: 100%;
    background-color: var(--input-background-color);
    border: none;
    border-bottom: 1px solid var(--input-color);
  }

  .input::placeholder {
    color: var(--input-placeholder-color);
  }

  .input-bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .input-bar::before, .input-bar::after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: var(--input-color);
    transition: 0.2s ease all;
  }

  .input-bar::before {
    left: 50%;
  }

  .input-bar::after {
    right: 50%;
  }

  input:focus ~ .input-bar:before, input:focus ~ .input-bar:after {
    background: var(--input-focus-color);
    width:50%;
  }
</style>

<div class="input-container"
      style="--input-color:{color};
              --input-background-color:{backgroundColor};
              --input-placeholder-color: {placeholderColor};
              --input-focus-color: {focusColor}">
  <input class="input" {placeholder} {type} />
  <span class="input-bar"/>
</div>
