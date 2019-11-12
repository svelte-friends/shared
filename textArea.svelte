<script>
  export let placeholder;
  export let placeholderColor = '#8c8c8c';
  export let borderColor = '#1f1c24';
  export let backgroundColor = 'transparent';
  export let rows = '3';
  export let labelText = '';
  export let labelTextColor = '#0b0e1e';
</script>

<style>
  .textArea {
    width: 100%;
    font-family: var(--text-font-family);
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    border: none;
    border-bottom: solid;
    background-color: var(--textArea-background-color);
  }

  .textArea:focus {
    border-color: var(--textArea-border-color);
  }

  .textArea::placeholder {
    color: var(--placeholder-color);
  }

  .textLabel {
    width: 100%;
    height: 150px;
    font-family: var(--text-font-family);
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.75px;
    color: var(--labelText-color);
  }
</style>

<label class="textLabel" style="--labelText-color: {labelTextColor}">
  {labelText}
</label>
<textarea
  class="textArea"
  {placeholder}
  {rows}
  style="--placeholder-color: {placeholderColor}; 
         --textArea-border-color: {borderColor};
         --textArea-background-color:{backgroundColor};" />
