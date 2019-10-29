<script>
  import { onMount } from "svelte";
  export let number = "";
  export let colorText = "#000";
  export let colorBadge = "#624695";
  export let textBadgeColor = "white";
  export let text = "Texto";
  export let size = "default"; // small
  
  let badgeClass = "";

</script>

<style>
  .textLabel {
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    margin-left: 6px;
  }
  
  .badgeDefault {
    border-radius: 100%;
    width: 10px;
    height: 10px;
  }
  .dotLabel {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    padding: 3.5px;
    margin-left: 6px;
  }
  .content {
    display: flex;
    align-items: center;
  }
 
</style>
<div class="content">
  <div class="textLabel" style={`color: ${colorText}`}>{text}</div>
  <div
    class="dotLabel badgeDefault"
    style={`background-color: ${colorBadge}`}>
    <div style={`color:${textBadgeColor}`}>{number}</div>
  </div>
</div>
