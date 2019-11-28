<script>
  export let on = false;
  export let color = '#b1d660';
  export let buttonColor = '#e0fe9f';
  export let disabled = false;
</script>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 38.8px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #bababa;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 15.3px;
    width: 15.3px;
    left: 3px;
    bottom: 2.5px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--switch-background-color);
  }

  input:checked + .slider::before {
    background-color: var(--switch-button-color);
  }

  input:checked + .slider:before {
    transform: translateX(17.3px);
  }
  .disabled {
    cursor: auto;
  }

  input:disabled + .slider {
    background-color: #cecece;
  }

  input:disabled + .slider:before {
    background-color: #adadad;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 10px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

<label
  class="switch"
  style="--switch-background-color:{color}; --switch-button-color:{buttonColor}">
  <input type="checkbox" checked={on} {disabled} />
  <div class:disabled class="slider round" />
</label>
