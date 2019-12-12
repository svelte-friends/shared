<script>
  export let color = '#624695';
  export let label = '';
  export let name;
  export let value;
  export let checked = false;
  export let disabled = false;
</script>

<style>
  .radio {
    display: block;
    position: relative;
    padding: 2px 0 0 25px;
    margin-bottom: 5px;
    cursor: pointer;
    user-select: none;
    min-height: 18px;
  }

  .radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .radio-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 2px solid #cecece;
  }

  .radio:hover input ~ .radio-checkmark {
    border-color: var(--radio-border-color);
  }

  .radio input:checked ~ .radio-checkmark {
    border-width: 6px;
    border-color: var(--radio-border-color);
  }

  .disabled {
    cursor: auto;
  }

  .disabled .radio-checkmark {
    box-shadow: none;
    opacity: 0.5;
  }
  .disabled:hover .radio-checkmark {
    border-color: #cecece;
  }
</style>

<label class="radio" class:disabled style="--radio-border-color:{color}">
  {label}
  <input type="radio" {disabled} {name} {checked} {value} on:change />
  <span class="radio-checkmark" />
</label>
