<script>
  export let text = '';
  export let outline;
  export let colorLabel = '#624695';
</script>

<style>
  .label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4em;
    border-radius: 5px;
    min-width: 60px;
    height: 25px;
    background-color: var(--color-label);
  }
  .textLabel {
    font-family: var(--text-font-family);
    font-size: 10px;
    letter-spacing: 1px;
    color: #fff;
  }
  .outline {
    border: solid 1px var(--color-label);
    background-color: transparent;
  }

  .outline > .textLabel {
    color: var(--color-label);
  }
</style>

<div class="label" style="--color-label: {colorLabel}" class:outline>
  <div class="textLabel">{text}</div>
</div>
