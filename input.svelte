<script>
  export let placeholder;
  export let placeholderColor = "#8c8c8c";
</script>

<style>
  .input {
    width: 100%;
  }

  .input::placeholder {
    color: var(--placeholder-color);
  }
</style>

<input class="input" {placeholder} style="--placeholder-color: {placeholderColor}"/>
