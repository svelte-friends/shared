<script>
  import { onMount } from "svelte";
  export let label = "";
  export let checked = false;
  export let color = "#624695";

  let checkmark;

  onMount(() => {
    checkmark.style.backgroundColor = checked ? color : "#FFF";
  });

  function onMouseOver() {
    checkmark.style.borderColor = color;
    checkmark.style.boxShadow = "0 1px 5px 0 rgba(40, 39, 40, 0.3)";
  }

  function onMouseOut() {
    checkmark.style.borderColor = "#CECECE";
    checkmark.style.boxShadow = "none";
  }

  function onChange() {
    checkmark.style.backgroundColor = this.checked ? color : "#FFF";
  }
</script>

<style>
  .container {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
    padding-left: 20px;
    padding-top: 2px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 4px;
    border: solid 2px #cecece;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark {
    border: none;
    box-shadow: 0 1px 5px 0 rgba(40, 39, 40, 0.3);
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>

<label class=container on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
  {label}
  <input on:change={onChange} type=checkbox bind:checked value={label} />
  <span class=checkmark bind:this={checkmark} />
</label>
