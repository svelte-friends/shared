<script>
  export let color = '#624695';
  export let label = '';
  export let name;
  export let value;
  export let checked = false;
  export let disabled = false;
</script>

<style>
  .radio-button {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 22px;
    cursor: pointer;
    user-select: none;
    height: 18px;
  }

  .radio-button input {
    position: absolute;
    cursor: pointer;
    left: 0;
    height: 100%;
    width: 18px;
    opacity: 0;
  }

  .radio-button-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 18px;
    border-radius: 50%;
    border: 2px solid #cecece;
  }

  .radio-button:hover input ~ .radio-button-checkmark {
    border-color: var(--radio-button-border-color);
  }

  .radio-button input:checked ~ .radio-button-checkmark {
    border-width: 6px;
    border-color: var(--radio-button-border-color);
  }

  .disabled {
    cursor: auto;
  }

  .disabled .radio-button-checkmark {
    box-shadow: none;
    opacity: 0.5;
  }
  .disabled:hover .radio-button-checkmark {
    border-color: #cecece;
  }
</style>

<label
  class="radio-button"
  class:disabled
  style="--radio-button-border-color:{color}">
  {label}
  <input type="radio" {disabled} {name} {checked} {value} on:change />
  <span class="radio-button-checkmark" />
</label>
