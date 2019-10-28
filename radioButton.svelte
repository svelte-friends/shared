<script>
  import { onMount } from "svelte";
  export let color = "#624695";
  let checkmark, radio;

  function onMouseOver(evt) {
    checkmark.style.borderColor = !radio.checked && color;
  }

  function onMouseOut() {
    checkmark.style.borderColor = !radio.checked && "#cecece";
  }

</script>

<style>
  .container {
    display: block;
    position: relative;
    padding: 2px 0 0 25px;
    margin-bottom: 5px;
    cursor: pointer;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: transparent;
    border-radius: 50%;
    border: solid 2px #cecece;
  }

  .container input:checked ~ .checkmark {
    border: solid 6px;
  }
</style>

<label class=container on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
  <input bind:this={radio} type=radio/>
  <span class=checkmark bind:this={checkmark}/>
</label>
