<script>
  export let text = 'Sample';
</script>

<style>
  .steps-wrapper {
    background: #fff;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 5px;
  }

  .steps li:before {
    width: 1.75rem;
    height: 1.75rem;
    content: '';
    line-height: 1.75rem;
    border: 2px solid #7d7d7d;
    display: block;
    text-align: center;
    margin: 0 auto 3px auto;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    background-color: #fff;
  }

  .steps li {
    list-style-type: none;
    width: 20%;
    float: left;
    font-size: 12px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    color: #7d7d7d;
  }

  .steps li:after {
    width: 50%;
    height: 2px;
    content: '';
    position: absolute;
    background-color: #ccc;
    top: 15px;
    left: -25%;
    z-index: 0;
  }

  .steps li:first-child:after {
    content: none;
  }

  .steps li::before {
    background-size: 60%;
  }

  .steps {
    counter-reset: step;
  }

  .steps li:before {
    content: counter(step);
    counter-increment: step;
  }
</style>

<div class="steps-wrapper">
  <ul class="steps">
    <li>{text}</li>
    <li>{text}</li>
    <li>{text}</li>
    <li>{text}</li>
  </ul>
</div>
