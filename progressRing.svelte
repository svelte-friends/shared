<script>
  export let small = false;
  export let big = false;
</script>

<style>
  .progress {
    width: 32px;
    height: 32px;
  }

  .small {
    width: 46px;
    height: 46px;
  }

  .big {
    width: 60px;
    height: 60px;
  }

  .big > .ring {
    stroke-width: 1.2px;
  }

  .ring {
    stroke-width: 1px;
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    transform-origin: center;
    stroke: #ccc;
  }
  .ring-animation {
    stroke-width: 3px;
    stroke-dasharray: 33;
  }
</style>

<svg class="progress" class:small class:big viewBox="0 0 32 32">
  <circle
    class="ring"
    fill="none"
    stroke-width="6"
    stroke-linecap="round"
    cx="16"
    cy="16"
    r="14" />

  <circle
    class="ring-animation"
    fill="none"
    stroke="#624695"
    stroke-width="2"
    stroke-linecap="round"
    cx="16"
    cy="16"
    r="14" />
</svg>
