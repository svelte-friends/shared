<script>
  export let text = "Sample";
  export let color = "#624695";
  export let hover = "#3f2371";
  export let active = "#26124a";

  export let small = false;
  export let big = false;

  export let pill = false;
  export let outline = false;
</script>

<style>
  .btn {
    text-align: center;
    vertical-align: middle;
    user-select: none;
    color: white;
    border: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background-color: var(--btn-color);
    box-shadow: 0 0 7px 0 rgba(40, 39, 40, 0.25);
    height: 38px;
    width: 100px;
    border-radius: 5px;
  }

  .btn:hover {
    background-color: var(--btn-hover-color);
  }

  .btn:active {
    background-color: var(--btn-active-color);
  }

  .small {
    height: 28px;
  }
  .big {
    height: 48px;
    width: 140px;
  }

  .pill {
    border-radius: 24px;
  }

  .outline {
    background-color: transparent;
    border: 2px solid;
    color: var(--btn-color);
  }
  .outline:hover {
    background-color: transparent;
    border-color: var(--btn-hover-color);
    color: var(--btn-hover-color);
  }
  .outline:active {
    background-color: transparent;
    border-color: var(--btn-active-color);
    color: var(--btn-active-color);
  }

</style>

<button
  class="btn"
  class:small
  class:big
  class:pill
  class:outline
  on:click
  style="--btn-color:{color}; --btn-hover-color:{hover}; --btn-active-color:{active}">
  {text}
</button>
