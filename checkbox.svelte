<script>
  export let label = '';
  export let checked = false;
  export let color = '#624695';
  export let disabled = false;
</script>

<style>
  .checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
    padding-left: 20px;
    padding-top: 2px;
    min-height: 18px;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 4px;
    border: solid 2px #cecece;
  }

  .checkbox-checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .checkbox:hover > .checkbox-checkmark {
    border-color: var(--checkbox-border-color);
    box-shadow: 0 1px 5px 0 rgba(40, 39, 40, 0.3);
  }
  .checkbox-checkmark:after {
    left: 5.4px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  input:checked ~ .checkbox-checkmark {
    border: none;
    background-color: var(--checkbox-border-color);
    box-shadow: 0 1px 5px 0 rgba(40, 39, 40, 0.3);
  }

  input:checked ~ .checkbox-checkmark:after {
    display: block;
  }

  .disabled {
    cursor: auto;
  }
  .disabled .checkbox-checkmark {
    box-shadow: none;
    opacity: 0.35;
  }

  .disabled:hover .checkbox-checkmark {
    border-color: #cecece;
    box-shadow: none;
  }
</style>

<label class="checkbox" class:disabled style="--checkbox-border-color:{color}">
  {label}
  <input type="checkbox" {disabled} bind:checked value={label} on:change />
  <span class="checkbox-checkmark" />
</label>
