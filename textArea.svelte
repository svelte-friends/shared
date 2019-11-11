<script>
  export let placeholder;
  export let placeholderColor = '#8c8c8c';
</script>

<style>
  .textArea {
    width: 100%;
    font-family: Poppins;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
  }

  .textArea::placeholder {
    color: var(--placeholder-color);
  }
</style>

<textarea
  class="textArea"
  {placeholder}
  style="--placeholder-color: {placeholderColor}" />
