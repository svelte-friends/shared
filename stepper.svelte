<script>
  export let labelColor = '#6f6f6f';
  export let doneColor = '#624695';
  export let stepColor = '#ccc';
  export let numberColor = '#6f6f6f';
  export let steps = [
    { label: 'STEP 1', done: false },
    { label: 'STEP 2', done: false },
  ];
  const styleColor = ` 
  --stepper-label-color: ${labelColor}; 
  --stepper-circle-color: ${stepColor};
  --stepper-number-color: ${numberColor};
  --stepper-done-color: ${doneColor};
  `;
  let check = `<svg viewBox="0 0 512 512" style="fill: #fff; width: 66%;"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg>`;

</script>

<style>
  .stepper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    position: relative;
  }

  .step-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    background-color: var(--stepper-circle-color);
    color: var(--stepper-number-color);
    font-size: 20px;
  }

  .step-label {
    margin: 10px 0;
    font-weight: bold;
    color: var(--stepper-label-color);
  }

  .step::after {
    position: absolute;
    content: '';
    height: 4px;
    width: 50%;
    top: 25%;
    right: -25%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
  .step:last-child::after {
    content: none;
  }

  .done {
    background-color: var(--stepper-done-color);
  }
</style>

<ul class="stepper" style={styleColor}>
  {#each steps as step, index}
    <li class="step">
      <div class="step-circle" class:done={step.done}>
      <slot name="icon" {step}>
        {#if step.done}
          {@html check}
        {:else}{index + 1}
        {/if}
      </slot>
      </div>
      {#if step.label}
        <div class="step-label">{step.label}</div>
      {/if}   
    </li>
  {/each}
</ul>
