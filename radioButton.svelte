<script>
  import { onMount } from "svelte";
  export let color = "#624695";

  let checkmark;

  onMount(() => {
    checkmark.style.borderColor = color;
  });
</script>

<style>
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
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
    border: solid 2px #CECECE;
  }

  .container input:checked ~ .checkmark {
    border: solid 6px;
  }
</style>

<label class=container>
  <input type=radio/>
  <span class=checkmark bind:this={checkmark}/>
</label>
