<script>
  import { onMount } from "svelte";
  export let number = "";
  export let color;
//   export let type = "fill"; //fill or outline
  export let text = "Texto";
  let dotLabel;
  let colorText;

  onMount(() => {
    colorText.style.color = color;
  });
</script>

<style>
  .dotLabel {
    display: flex;
    justify-content: center;
    font-size: 10px;
    color: var(--labelColor, white);
    border-radius: 5px;
    width: 10px;
    min-height: 10px;
    letter-spacing: 1px;
  }

  .textLabel {
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
  }
</style>

<div class="textLabel">
  <span bind:this={colorText}>{text}</span>
  <!-- <div class="dotLabel" style={inLine}>{number}</div> -->
</div>
