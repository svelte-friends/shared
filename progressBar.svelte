<script>
  export let backgroundColor = "linear-gradient(268deg, #624695, #e1364a)";
  export let medium = false;
  export let big = false;

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
    width: 50%;
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
  <div class="progress-indicator" style={`background: ${backgroundColor}`} />
</div>
