<script>
  import { beforeUpdate } from "svelte";
  export let backgroundColor = "linear-gradient(268deg, #624695, #e1364a)";
  export let medium = false;
  export let big = false;
  export let value = 0;
  export let indeterminate = false;

  beforeUpdate(() => {
    if (value > 100) {
      value = 100;
    }
    if (value < 0) {
      value = 0;
    }
  });

</script>

<style>
  .progress {
    width: 100%;
    height: 5px;
    object-fit: contain;
    border-radius: 10px;
    background-color: #ebebeb;
  }

  .indeterminate {
    width: 20%;
    animation: ping 1s linear infinite alternate;

  }

  .progress-indicator {
    height: 100%;
    border-radius: 10px;
  }

  .medium {
    height: 10px;
  }

  .big {
    height: 15px;
  }

  @keyframes ping {
    to {
      margin-left: 0;
    }
    from {

      margin-left: 80%;
    }
  }

</style>

<div class="progress" class:medium class:big>
  {#if indeterminate}
    <div
      class="progress-indicator indeterminate"
      style={` background: ${backgroundColor}`} />
  {:else}
    <div
      class="progress-indicator"
      style={`background: ${backgroundColor}; width:${value}%`} />
  {/if}
</div>
