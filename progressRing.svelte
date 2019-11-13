<script>
  export let small = false;
  export let big = false;
  export let text = 'Loading';
  export let colorText = '#0b0e1e';
  export let color = '#624695';
  export let type = 'indeterminate';
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

  .ring {
    stroke-width: 1px;
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    transform-origin: center;
    stroke: #bcbcbc;
  }

  .indeterminate {
    stroke-width: 3px;
    stroke-dasharray: 326.726, 12;
    stroke-dashoffset: 272.579;
    transform-origin: center;
    animation: rotator 1s linear infinite;
  }

  .determinate {
    stroke-width: 3px;
    stroke-dasharray: 33;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: rotator 1s linear infinite;
  }

  @keyframes rotator {
    to {
      transform: rotate(360deg);
    }
  }
</style>

<div class="content">
  <div class="items">
    {#if type === 'indeterminate'}
      <svg class="progress" class:small class:big viewBox="0 0 32 32">

        <radialGradient
          id="gradient"
          stroke="url(#gradient)"
          cx="12%"
          cy="20%"
          r="30%"
          fx="10%"
          fy="10%">
          <stop offset="30%" style="stop-color:transparent;" />
          <stop offset="100%" stop-color={color} />
        </radialGradient>

        <circle
          class="indeterminate"
          fill="none"
          stroke="url(#gradient)"
          stroke-width="2"
          stroke-linecap="round"
          cx="16"
          cy="16"
          r="14" />
      </svg>
    {:else}
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
          class="determinate"
          fill="none"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          cx="16"
          cy="16"
          r="14" />
      </svg>
    {/if}

  </div>
  <div class="items text" style="--color-text-default:{colorText};">{text}</div>
</div>
