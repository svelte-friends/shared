<script>
  export let labelColor = '';
  export let steps = ['step1', 'step2', 'step3', 'step4'];
  export let stepColor = '';
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
    color: #fff;
    font-size: 20px;
  }

  .step-label {
    margin: 10px 0;
    color: var(--stepper-label-color);
  }
</style>

<ul
  class="stepper"
  style=" --stepper-label-color:{labelColor}; --stepper-circle-color:{stepColor}">
  {#each steps as step, index}
    <li class="step">
      <div class="step-circle">{index + 1}</div>
      <div class="step-label">{step}</div>
    </li>
  {/each}
</ul>
