<script>
import { beforeUpdate } from "svelte";
  export let backgroundColor = "linear-gradient(268deg, #624695, #e1364a)";
  export let medium = false;
  export let big = false;
  export let percente = 0;
  
  beforeUpdate(() => {
    if (percente > 100) {
      percente = 100;
    }
    if (percente < 0) {
      percente = 0;
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
</style>

<div class="progress" class:medium class:big>
  <div
    class="progress-indicator"
    style={`background: ${backgroundColor}; width:${percente}%`} />
</div>
