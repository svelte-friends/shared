<script>
  export let small = false;
  export let big = false;
  export let text = 'Loading';
  export let colorText = '#0b0e1e';
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .items {
    padding: 2px;
  }
  .text {
    font-family: var(--text-font-family);
    font-size: 14px;
    letter-spacing: 0.75px;
    font-weight: 600;
    color: var(--color-text-default);
  }
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

<div class="content">
  <div class="items">
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
  </div>
  <div class="items text" style="--color-text-default:{colorText};">{text}</div>
</div>
