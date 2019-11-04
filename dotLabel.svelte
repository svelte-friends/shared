<script>
  export let number = "";
  export let colorText = "#000";
  export let colorBadge = "#624695";
  export let textBadgeColor = "white";
  export let text = "Texto";
  export let size = "default"; // small

  let badgeClass = "";
  if (number === "") {
    if (size === "small") badgeClass = "badgeSmall";
    else badgeClass = "badgeDefault";
  }
  if (number.length === 1) badgeClass = "badgeOne";
  if (number.length > 1) badgeClass = "badgeMore";
  if (number > 99) number = "99+";
</script>

<style>
  .textLabel {
    font-family: var(--text-font-family);
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    margin-left: 6px;
  }
  .badgeMore {
    width: 24px;
    height: 16px;
    border-radius: 8px;
  }
  .badgeOne {
    width: 18px;
    height: 18px;
    border-radius: 100%;
  }
  .badgeSmall {
    border-radius: 100%;
    width: 6px;
    height: 6px;
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
    class="dotLabel {badgeClass}"
    style={`background-color: ${colorBadge}`}>
    <div style={`color:${textBadgeColor}`}>{number}</div>
  </div>
</div>
