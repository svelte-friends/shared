<script>
  export let text = "Label";
  export let color = "#624695";
  export let type = "fill"; //fill or outline
  let label;

  let inLine =
    type === "outline"
      ? `background: transparent; color: ${color}; border: 1px solid ${color};`
      : `background-color: ${color};`;
</script>

<style>
  .label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: var(--labelColor, white);
    font-weight: 500;
    text-align: center;
    padding: 0.4em;
    border-radius: 5px;
    width: 60px;
    min-height: 25px;
    letter-spacing: 1px;
  }
</style>

<div class="label" style={inLine}>{text}</div>
