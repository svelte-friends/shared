<script>

export let backgroundColor = "linear-gradient(268deg, #624695, #e1364a)";

</script>

<style>
  .content {
      width: 100%;
  }

  .progressDefault {
    width: 272px;
    height: 5px;
    object-fit: contain;
    border-radius: 10px;
    background-color: #ebebeb;
  }

  .progress-barDefault {
    width: 136px;
    height: 5px;
    border-radius: 10px;
  }
</style>

<div class="content">
  <div class="progressDefault" >
  <div class="progress-barDefault"
    style={`background: ${backgroundColor}`}>  
   </div>
  </div>
</div>
