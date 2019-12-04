<script>
  export let labelColor = '';
  export let steps = ['step1', 'step2', 'step3', 'step4'];
  export let stepColor = '#624695';
  export let numberColor = '#fff';

  const styleColor = ` 
  --stepper-label-color: ${labelColor}; 
  --stepper-circle-color: ${stepColor};
  --stepper-number-color: ${numberColor};
  `;
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
</style>

<ul class="stepper" style={styleColor}>
  {#each steps as step, index}
    <li class="step">
      <div class="step-circle">{index + 1}</div>
      <div class="step-label">{step}</div>
    </li>
  {/each}
</ul>
