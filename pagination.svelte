<script>
import { onMount } from "svelte";
export let color = '#624695';
let active;

  onMount(() => {
    active.style.backgroundColor = color;
  });

</script>

<style>

.container{
width: auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}


ul {

padding-left: 0px;
height: 30px;
flex-direction: row;
align-items: center;
text-align: center;
width: auto;
display: inline-flex;

}

.item{
  width: 30px;
  height: 30px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  text-decoration: none;
}

.active{
  width: 30px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(40, 39, 40, 0.3);
  color:white;
  padding-top: 6px;
}

.first {
 margin-left: 10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 40px;
}

.last{
 margin-right: 10px;
 border-top-right-radius: 15px;
 border-bottom-right-radius: 15px;
 width: 40px;
}

a{
  text-decoration: none;
  text-align: center;
  color: #8c8c8c;
}

</style>

<div class="container">
<ul>
        <li class="item first"><a href="#">1</a></li>
        <li class="item"><a  class=active bind:this={active} href="#">2</a></li>
        <li class="item"><a  href="#">3</a></li>
        <li class="item"><a  href="#">4</a></li>
        <li class="item"><a  href="#">5</a></li>
        <li class="item last"><a  href="#">6</a></li>
</ul>
</div>


