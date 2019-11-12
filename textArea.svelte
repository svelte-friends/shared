<script>
  export let placeholder;
  export let placeholderColor = '#8c8c8c';
  export let borderColor = '#1f1c24';
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
    border: none;
    border-bottom: solid;
  }

  .textArea:focus {
    border-color: var(--textArea-border-color);
  }

  .textArea::placeholder {
    color: var(--placeholder-color);
  }
</style>

<textarea
  class="textArea"
  {placeholder}
    style="--placeholder-color: {placeholderColor}; 
           --textArea-border-color: {borderColor};"/>
