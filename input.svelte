<script>
  export let placeholder;
  export let placeholderColor = '#8c8c8c';
  export let backgroundColor = '#fff';
</script>

<style>
  .input {
    width: 100%;
    background-color: var(--input-background-color);
  }

  .input::placeholder {
    color: var(--input-placeholder-color);
  }
</style>

<input
  class="input"
  {placeholder}
  style="--input-background-color:{backgroundColor}; --input-placeholder-color: {placeholderColor}" />
