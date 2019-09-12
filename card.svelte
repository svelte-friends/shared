<script>
  export let avatar = "";
  export let title = "";
  export let subtitle = "";
  export let content = "";
</script>

<style>
  .card {
    color: black;
    border: 1px solid white;
    border-radius: 5px;
    padding: 20px 30px;
    background-color: white;
    box-shadow: -5px 4px 13px -2px rgba(0, 0, 0, 0.75);
  }
  .card-header {
    padding-bottom: 15px;
    border-bottom: 1px solid #e8e8e8;
  }
  .card-header div:nth-child(1) {
    padding-bottom: 10px;
    font-weight: 600;
  }
  .card-header div:nth-child(2) {
    font-size: 0.9rem;
    color: gray;
  }
  .card-content {
    padding: 15px;
    padding-bottom: 0;
  }
</style>

<div class="card">
  <header class="card-header">
    <div>{title}</div>
    <div>{subtitle}</div>
  </header>
  <body class="card-content">
    <div>{content}</div>
  </body>
</div>
